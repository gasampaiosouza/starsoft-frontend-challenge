import { IProducts } from '@/types/products';

export async function getProducts(limit = 12) {
  // console.log({ page });
  const URL = `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?limit=${limit}`;
  const res = await fetch(URL, {
    next: { revalidate: 3600, tags: ['products'] }, // cache for 1 hour
  });

  const products = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }

  return products as IProducts;
}
