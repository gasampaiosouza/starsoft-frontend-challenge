'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { IProduct } from '@/types/products';
import EtherumLogo from '@/components/icons/etherum-logo';

import { addToCart } from '@/lib/features/cartSlice';
import { useAppDispatch } from '@/lib/hooks';

import QuantityMinusIcon from '@/components/icons/quantity-minus';
import QuantityPlusIcon from '@/components/icons/quantity-plus';

import ArrowLeft from '@/components/icons/arrow-left';

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

interface IProductInfoContent {
  product: IProduct | undefined;
}

const ProductInfoContent: React.FC<IProductInfoContent> = ({ product }) => {
  const dispatch = useAppDispatch();

  const [productQuantity, setProductQuantity] = useState(
    product?.quantity || 1
  );

  if (!product) return <ProductNotFound />;

  function handleQuantityChange(newQuantity: number) {
    setProductQuantity(newQuantity);
  }

  function handleAddToCart(product: IProduct, quantity = 1) {
    dispatch(addToCart({ product, quantity }));
  }

  const defaultAnimation = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', delay: delay },
  });

  return (
    <Container>
      <BackButton href="/">
        <ArrowLeft />
        Voltar
      </BackButton>

      <ProductContainer>
        <ProductImage {...defaultAnimation(0.5)}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            fetchPriority="high"
            quality={80}
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
  return (
    <NotFoundContainer>
      <motion.h3>O produto que você está procurando não existe</motion.h3>

      <BackButton href="/">
        <ArrowLeft />
        Voltar
      </BackButton>
    </NotFoundContainer>
  );
}

export default ProductInfoContent;
