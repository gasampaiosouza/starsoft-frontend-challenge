import Image from 'next/image';

import EtherumLogo from '@/components/icons/etherum-logo';

import {
  BuyButton,
  Container,
  ProductDescription,
  ProductImage,
  ProductLink,
  ProductName,
  ProductPrice,
} from './styles';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cartSlice';
import { IProduct } from '@/types/products';

type IProductProps = {
  product: IProduct;
  isPriority?: boolean;
};

const Product: React.FC<IProductProps> = ({ product, isPriority }) => {
  const dispatch = useAppDispatch();

  function handleAddToCart(product: IProduct) {
    dispatch(addToCart({ product }));
  }

  return (
    <Container>
      <ProductLink href={`/product/${product.id}`}>
        <ProductImage>
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={isPriority}
            loading={isPriority ? 'eager' : 'lazy'}
            quality={50}
            draggable={false}
          />
        </ProductImage>

        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>

        <ProductPrice>
          <EtherumLogo />
          {product.price} ETH
        </ProductPrice>
      </ProductLink>

      <BuyButton onClick={() => handleAddToCart(product)}>COMPRAR</BuyButton>
    </Container>
  );
};

export default Product;
