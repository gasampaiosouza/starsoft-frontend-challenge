'use client';

import { useEffect, useState } from 'react';

import {
  AddedProductsContainer,
  CartContainer,
  CartFooter,
  CartHeader,
  CartTotal,
  CloseButton,
  Container,
  OpenCartButton,
  Overlay,
} from './styles';

import BagIcon from 'public/bag.svg';
import ArrowLeft from 'public/arrow-left.svg';
import EtherumLogo from 'public/etherum-logo.svg';
import { mocked_products } from '../ProductList';
import CartProduct from './CartProduct';
import { DefaultButton } from '@/styles/global';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutButtonText, setCheckoutButtonText] = useState('FINALIZAR COMPRA');

  const toggleCart = () => setIsOpen(!isOpen);

  function goToCheckout() {
    setCheckoutButtonText('COMPRA FINALIZADA!');
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Container>
      <OpenCartButton onClick={toggleCart}>
        <BagIcon />
        <span>0</span>
      </OpenCartButton>

      <Overlay show={isOpen ? 1 : 0} onClick={toggleCart} />

      <CartContainer
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.6, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <CartHeader>
          <CloseButton onClick={toggleCart}>
            <ArrowLeft />
          </CloseButton>

          <h2>Mochila de Compras</h2>
        </CartHeader>

        <AddedProducts />

        <CartFooter>
          <CartTotal>
            <span>Total</span>
            <div>
              <EtherumLogo /> 44 ETH
            </div>
          </CartTotal>

          <DefaultButton onClick={goToCheckout}>{checkoutButtonText}</DefaultButton>
        </CartFooter>
      </CartContainer>
    </Container>
  );
};

const AddedProducts = () => {
  return (
    <AddedProductsContainer>
      {mocked_products.data.slice(0, 2).map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </AddedProductsContainer>
  );
};

export default Cart;
