import ProductList from '@/components/ProductList';
import { ContentContainer } from './styles';
import Pagination from '@/components/Pagination';

export default function Home() {
  return (
    <ContentContainer>
      <ProductList />
      <Pagination />
    </ContentContainer>
  );
}
