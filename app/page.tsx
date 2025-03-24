import Pagination from '@/components/Pagination';
import ProductList from '@/components/ProductList';

import { ContentContainer } from './styles';

import { getProducts } from './lib/api';
import { getQueryClient } from './lib/queryClient';
import { dehydrate, hydrate, HydrationBoundary } from '@tanstack/react-query';

const Home = async () => {
  // this is the new `getServerSideProps` on app router (you guys mentioned it on the readme)
  // but the result is the same
  const products = await getProducts();

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ['products'] });
  const dehydratedState = dehydrate(queryClient);

  // console.log({ products });

  return (
    <ContentContainer>
      <HydrationBoundary state={dehydratedState}>
        <ProductList initialProducts={products.data} metadata={products.metadata} />
      </HydrationBoundary>

      <Pagination />
    </ContentContainer>
  );
};

export default Home;
