'use client';

import {
  replaceProducts,
  fetchProducts,
  setMetadata,
} from '@/lib/features/productsSlice';
import { useAppDispatch, useAppSelector, useClientFetch } from '@/lib/hooks';
import { IProducts } from '@/types/products';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Product from '../Product';
import { Container, LoadingComponent } from './styles';
import Pagination from '../Pagination';

interface Props {
  initialData: IProducts;
}

const ProductList: React.FC<Props> = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const productsStatus = useAppSelector((state) => state.products.status);
  const defaultProductsPerPage = useAppSelector(
    (state) => state.products.productsPerPage
  );

  const handlePageChange = (newLimit: number) => setProductsPerPage(newLimit);

  useEffect(() => {
    if (productsStatus === 'idle') {
      // only fetch if there are no products yet
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);

  const [productsPerPage, setProductsPerPage] = useState(
    defaultProductsPerPage
  );

  const { data, isLoading, isError } = useClientFetch(productsPerPage);

  // fetch only when there are products, to cache them
  useEffect(() => {
    if (!data) return;

    dispatch(replaceProducts(data.data));
    dispatch(setMetadata(data.metadata));
  }, [data, dispatch]);

  if (isLoading) return <LoadingComponent />;
  if (isError) return <p>Error</p>;

  return (
    <>
      <Container>
        {(products.length ? products : initialData.data).map(
          (product, index) => (
            // isPriority if it's one of the first four images
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1, once: true }}
              transition={{
                duration: 1,
                delay: 0.1 * (index >= 4 ? index - 4 : index),
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
            >
              <Product product={product} isPriority={index < 4} />
            </motion.div>
          )
        )}
      </Container>

      <Pagination limit={productsPerPage} changeLimit={handlePageChange} />
    </>
  );
};

export default ProductList;
