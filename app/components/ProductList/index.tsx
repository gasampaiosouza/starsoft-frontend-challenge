'use client';

import { getProducts } from '@/lib/api';
import { fetchProducts } from '@/lib/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { IProduct } from '@/types/products';
import { useQuery } from '@tanstack/react-query';

import { useEffect } from 'react';

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

interface Props {
  initialProducts: IProduct[];
}

const ProductList: React.FC<Props> = ({ initialProducts }) => {
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.items);
  const productsStatus = useAppSelector((state) => state.status);

  // console.log({ productsState });

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts().then((res) => res.data),
    initialData: initialProducts,
    staleTime: 60 * 1000, // 1 minute to refetch
  });

  useEffect(() => {
    if (productsStatus === 'idle') {
      // only fetch if there are no products yet
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
