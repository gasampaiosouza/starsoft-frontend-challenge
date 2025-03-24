import Image from 'next/image';

import EtherumLogo from 'public/etherum-logo.svg';

import {
  BuyButton,
  Container,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cartSlice';
import { IProduct } from '@/types/products';

type IProductProps = {
  product: IProduct;
};

const Product: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  function handleAddToCart(product: IProduct) {
    dispatch(addToCart(product));
  }

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

      <BuyButton onClick={() => handleAddToCart(product)}>COMPRAR</BuyButton>
    </Container>
  );
};

export default Product;
