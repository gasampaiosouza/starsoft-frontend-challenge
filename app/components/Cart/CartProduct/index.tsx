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
import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { removeFromCart } from '@/lib/features/cartSlice';
import { IProduct } from '@/types/products';

const CartProduct: React.FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromCart(id));
  }

  return (
    <Container>
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
          <QuantitySelector />

          <RemoveProductButton onClick={() => handleRemoveFromCart(product.id)}>
            <TrashIcon />
          </RemoveProductButton>
        </CartProductControls>
      </CartProductContent>
    </Container>
  );
};

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <QuantitySelectorContainer>
      <QuantityMinus onClick={() => setQuantity(quantity - 1)}>
        <QuantityMinusIcon />
      </QuantityMinus>

      <CurrentQuantity
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <QuantityPlus onClick={() => setQuantity(quantity + 1)}>
        <QuantityPlusIcon />
      </QuantityPlus>
    </QuantitySelectorContainer>
  );
};

export default CartProduct;
