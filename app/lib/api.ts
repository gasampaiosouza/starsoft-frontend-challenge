import { IProducts } from '@/types/products';

import axios from 'axios';

export async function getProducts(limit = 12) {
  try {
    const URL = `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?limit=${limit}`;
    
    const response = await axios.get(URL);

    return response.data as IProducts;
  } catch (error) {
    console.log(error);
  }
}
