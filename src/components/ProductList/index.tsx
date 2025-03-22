import Product from '../Product';
import { Container } from './styles';

export const mocked_products = {
  data: Array.from({ length: 20 }, (_, index) => ({
    id: index + 1, // Unique ID for each item
    name: 'Backpack',
    description:
      'Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas.',
    image: 'https://softstar.s3.amazonaws.com/items/backpack.png',
    price: 182,
    createdAt: new Date().toISOString(),
  })),
};

const ProductList = () => {
  return (
    <Container>
      {mocked_products.data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
