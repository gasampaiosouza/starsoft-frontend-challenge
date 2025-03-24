'use client';

import { getProducts } from '@/lib/api';
import { fetchProducts } from '@/lib/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { IProduct, Metadata } from '@/types/products';
import { useQuery } from '@tanstack/react-query';

import { useEffect, useState } from 'react';

import Product from '../Product';
import { Container } from './styles';

interface Props {
  initialProducts: IProduct[];
  metadata: Metadata;
}

const ProductList: React.FC<Props> = ({ initialProducts, metadata }) => {
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.products.items);
  const productsStatus = useAppSelector((state) => state.products.status);

  // const [page, setPage] = useState(metadata.page);

  // console.log({ productsState });

  const { data: products } = useQuery({
    // enabled: page > 1,
    queryKey: ['products'],
    queryFn: () => getProducts().then((res) => res.data),
    initialData: initialProducts,
    staleTime: 60 * 1000, // 1 minute to refetch
  });

  // const handlePageChange = (newPage: number) => setPage(newPage);

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
