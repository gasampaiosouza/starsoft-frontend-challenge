import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import ProductList from '@/components/ProductList';

import { ContentContainer } from './styles';

import { getProducts } from './lib/api';
import { getQueryClient } from './lib/queryClient';

const Home = async () => {
  // this is the new `getServerSideProps` on app router (you guys mentioned it on the readme)
  // but the result is the same
  const products = await getProducts();

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ['products'] });
  const dehydratedState = dehydrate(queryClient);

  return (
    <ContentContainer>
      <HydrationBoundary state={dehydratedState}>
        <ProductList initialData={products} />
      </HydrationBoundary>
    </ContentContainer>
  );
};

export default Home;
