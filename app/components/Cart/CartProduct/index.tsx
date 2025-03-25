import Image from 'next/image';

import EtherumLogo from 'public/etherum-logo.svg';
import QuantityMinusIcon from 'public/quantity-minus.svg';
import QuantityPlusIcon from 'public/quantity-plus.svg';
import TrashIcon from 'public/trash.svg';

import {
  Container,
  CartProductImage,
  CartProductContent,
  CartProductName,
  CartProductDescription,
  CartProductPrice,
  CartProductControls,
  CurrentQuantity,
  QuantityMinus,
  QuantityPlus,
  QuantitySelectorContainer,
  RemoveProductButton,
} from './styles';
import { useEffect, useState } from 'react';
import { useAppDispatch, useDebounce } from '@/lib/hooks';
import { removeFromCart, updateQuantity } from '@/lib/features/cartSlice';
import { IProduct } from '@/types/products';

const CartProduct: React.FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromCart(id));
  }

  const itemVariants = {
    hidden: { x: '200%', opacity: 0 },
    visible: { x: '0', opacity: 1, transition: { duration: 1 } },
  }

  return (
    <Container variants={itemVariants} exit="hidden">
      <CartProductImage>
        <Image src={product.image} alt={product.name} draggable={false} fill />
      </CartProductImage>

      <CartProductContent>
        <CartProductName>{product.name}</CartProductName>
        <CartProductDescription>{product.description}</CartProductDescription>

        <CartProductPrice>
          <EtherumLogo />
          {product.price} ETH
        </CartProductPrice>

        <CartProductControls>
          <QuantitySelector product={product} />

          <RemoveProductButton onClick={() => handleRemoveFromCart(product.id)}>
            <TrashIcon />
          </RemoveProductButton>
        </CartProductControls>
      </CartProductContent>
    </Container>
  );
};

interface IQuantitySelectorProps {
  product: IProduct;
  callback?: (quantity: number) => void;
}

const QuantitySelector: React.FC<IQuantitySelectorProps> = ({
  product,
  callback,
}) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // update quantity when the product quantity changes
    setQuantity(product.quantity || 1);
  }, [product.quantity])

  // debounce only updates the global state, it prevents unecessary re-renders
  const debouncedQuantity = useDebounce((quantity: number) => {
    if (callback) callback(quantity);
    else dispatch(updateQuantity({ id: product.id, quantity }));
  }, 1000);

  function handleQuantityChange(newQuantity: number) {
    debouncedQuantity(newQuantity);

    // optimal layout
    setQuantity(newQuantity);
  }

  return (
    <QuantitySelectorContainer>
      <QuantityMinus onClick={() => handleQuantityChange(quantity - 1)}>
        <QuantityMinusIcon />
      </QuantityMinus>

      <CurrentQuantity
        value={quantity}
        onChange={(e) => handleQuantityChange(Number(e.target.value))}
      />

      <QuantityPlus onClick={() => handleQuantityChange(quantity + 1)}>
        <QuantityPlusIcon />
      </QuantityPlus>
    </QuantitySelectorContainer>
  );
};

export default CartProduct;
