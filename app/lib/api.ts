import { IProducts } from '@/types/products';

export async function getProducts(limit = 12) {
  try {
    const URL = `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?limit=${limit}`;

    const response = await fetch(URL, {
      cache: 'force-cache',
      next: { revalidate: 60 * 30 }, // 30 minutes
    });

    const data = await response.json();

    return data as IProducts;
  } catch (error) {
    console.log(error);
  }
}
