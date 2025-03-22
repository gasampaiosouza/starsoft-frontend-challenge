import { IProducts } from '@/types/products';

export async function getProducts() {
  const URL =
    'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=20';
  const res = await fetch(URL, { next: { revalidate: 3600 } }); // cache for 1 hour
  const products = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }

  return products as IProducts;
}
