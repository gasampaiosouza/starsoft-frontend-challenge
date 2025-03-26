'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  AddedProductsContainer,
  CartContainer,
  CartFooter,
  CartHeader,
  CartTotal,
  CloseButton,
  Container,
  EmptyCartMessage,
  OpenCartButton,
  Overlay,
} from './styles';

import BagIcon from '@/components/icons/bag';
import ArrowLeft from '@/components/icons/arrow-left';
import EtherumLogo from '@/components/icons/etherum-logo';
import CartProduct from './CartProduct';
import { DefaultButton } from '@/styles/global';
import { useAppSelector } from '@/lib/hooks';
import { IProduct } from '@/types/products';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutButtonText, setCheckoutButtonText] =
    useState('FINALIZAR COMPRA');

  const { items, totalAmount, totalQuantity } = useAppSelector(
    (state) => state.cart
  );

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
        <span>{totalQuantity}</span>
      </OpenCartButton>

      <Overlay $show={isOpen ? 1 : 0} onClick={toggleCart} />

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

        <AddedProducts products={items} />

        <CartFooter>
          <CartTotal>
            <span>Total</span>
            <div>
              <EtherumLogo /> {totalAmount} ETH
            </div>
          </CartTotal>

          <DefaultButton onClick={goToCheckout}>
            {checkoutButtonText}
          </DefaultButton>
        </CartFooter>
      </CartContainer>
    </Container>
  );
};

interface IAddedProductsProps extends IProduct {
  quantity: number;
}

const AddedProducts: React.FC<{ products: IAddedProductsProps[] }> = ({
  products,
}) => {
  const hasProducts = products.length > 0;

  return (
    <AddedProductsContainer>
      {hasProducts ? (
        <AnimatePresence>
          {products.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </AnimatePresence>
      ) : (
        <EmptyCartMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Seu carrinho está vazio
        </EmptyCartMessage>
      )}
    </AddedProductsContainer>
  );
};

export default Cart;
