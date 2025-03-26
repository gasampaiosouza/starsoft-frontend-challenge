'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector, useClientFetch } from '@/lib/hooks';
import { replaceProducts, setMetadata } from '@/lib/features/productsSlice';
import Loading from '@/components/icons/loading';
import { IProducts } from '@/types/products';

import Product from '../Product';
import { Container, ErrorComponent, LoadingComponent } from './styles';
import Pagination from '../Pagination';

interface Props {
  initialData: IProducts | undefined;
}

const ProductList: React.FC<Props> = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const defaultProductsPerPage = useAppSelector(
    (state) => state.products.productsPerPage
  );

  const handlePageChange = (newLimit: number) => setProductsPerPage(newLimit);

  const [productsPerPage, setProductsPerPage] = useState(
    defaultProductsPerPage
  );

  const { data, isLoading, isError } = useClientFetch(productsPerPage);

  // run to save products & metadata on the global state
  useEffect(() => {
    if (!data) return;

    dispatch(replaceProducts(data.data));
    dispatch(setMetadata(data.metadata));
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <LoadingComponent>
        <Loading />
      </LoadingComponent>
    );
  }

  if (isError) {
    return (
      <ErrorComponent>
        Ocorreu um erro, tente novamente mais tarde
      </ErrorComponent>
    );
  }

  return (
    <>
      <Container>
        {(products.length ? products : initialData!.data).map(
          (product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1, once: true }}
              transition={{
                duration: 1,
                delay: 0.05 * (index >= 4 ? index - 4 : index),
                type: 'spring',
              }}
            >
              {/* isPriority to render if it's one of the first four images */}
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
