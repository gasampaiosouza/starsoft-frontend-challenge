'use client';

import { useState } from 'react';
import Image from 'next/image';

import { IProduct } from '@/types/products';
import EtherumLogo from 'public/etherum-logo.svg';

import { addToCart } from '@/lib/features/cartSlice';
import { useAppDispatch } from '@/lib/hooks';

import QuantityMinusIcon from 'public/quantity-minus.svg';
import QuantityPlusIcon from 'public/quantity-plus.svg';

import ArrowLeft from 'public/arrow-left.svg';

import { motion } from 'framer-motion';

import {
  CurrentQuantity,
  QuantityMinus,
  QuantityPlus,
} from '../Cart/CartProduct/styles';

import {
  BackButton,
  BuyButton,
  Container,
  NotFoundContainer,
  ProductContainer,
  ProductContent,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductQuantityLabel,
  ProductQuantitySelector,
} from './styles';
import { useRouter } from 'next/navigation';

interface IProductInfoContent {
  product: IProduct | undefined;
}

const ProductInfoContent: React.FC<IProductInfoContent> = ({ product }) => {
  const dispatch = useAppDispatch();

  if (!product) return <ProductNotFound />;

  const router = useRouter();

  const [productQuantity, setProductQuantity] = useState(product.quantity || 1);

  function handleQuantityChange(newQuantity: number) {
    setProductQuantity(newQuantity);
  }

  function handleAddToCart(product: IProduct, quantity = 1) {
    dispatch(addToCart({ product, quantity }));
  }

  const defaultAnimation = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', delay },
  });

  return (
    <Container>
      <BackButton onClick={() => router.back()}>
        <ArrowLeft />
        Voltar
      </BackButton>

      <ProductContainer>
        <ProductImage {...defaultAnimation()}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            quality={100}
            draggable={false}
          />
        </ProductImage>

        <ProductContent>
          <ProductName {...defaultAnimation()}>{product.name}</ProductName>
          <ProductDescription {...defaultAnimation(0.2)}>
            {product.description}
          </ProductDescription>
          <ProductPrice {...defaultAnimation(0.3)}>
            <EtherumLogo />
            {product.price} ETH
          </ProductPrice>

          <ProductQuantityLabel {...defaultAnimation(0.35)}>
            Quantidade
          </ProductQuantityLabel>
          <ProductQuantitySelector {...defaultAnimation(0.4)}>
            <QuantityMinus
              onClick={() => handleQuantityChange(productQuantity - 1)}
            >
              <QuantityMinusIcon />
            </QuantityMinus>

            <CurrentQuantity
              value={productQuantity}
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
            />

            <QuantityPlus
              onClick={() => handleQuantityChange(productQuantity + 1)}
            >
              <QuantityPlusIcon />
            </QuantityPlus>
          </ProductQuantitySelector>

          <BuyButton
            onClick={() => handleAddToCart(product, productQuantity)}
            {...defaultAnimation(0.5)}
          >
            COMPRAR
          </BuyButton>
        </ProductContent>
      </ProductContainer>
    </Container>
  );
};

function ProductNotFound() {
  const router = useRouter();

  return (
    <NotFoundContainer>
      <motion.h3>O produto que você está procurando não existe</motion.h3>

      <BackButton onClick={() => router.back()}>
        <ArrowLeft />
        Voltar
      </BackButton>
    </NotFoundContainer>
  );
}

export default ProductInfoContent;
