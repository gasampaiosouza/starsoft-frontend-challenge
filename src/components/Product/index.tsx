import Image from 'next/image';
import { mocked_products } from '../ProductList';

import EtherumLogo from 'public/etherum-logo.svg';

import {
  BuyButton,
  Container,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

type IProduct = {
  product: (typeof mocked_products.data)[0];
};

const Product: React.FC<IProduct> = ({ product }) => {
  return (
    <Container>
      <ProductImage>
        <Image src={product.image} alt={product.name} draggable={false} fill />
      </ProductImage>

      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>
        <EtherumLogo />
        {product.price} ETH
      </ProductPrice>

      <BuyButton>COMPRAR</BuyButton>
    </Container>
  );
};

export default Product;
