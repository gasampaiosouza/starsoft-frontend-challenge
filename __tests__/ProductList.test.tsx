import ProductList from '@/components/ProductList';
import { render } from '@/lib/test-utils';
import { IProduct } from '@/types/products';
import { screen, waitFor } from '@testing-library/react';
import axios from 'axios';

import mockedResponse from './mockedResponse';

jest.mock(
  '../app/components/Product',
  () =>
    ({ product }: { product: IProduct }) =>
      <div data-testid="product-card">{product.name}</div>
);

jest.mock('axios');

const mockAxios = axios as jest.Mocked<typeof axios>;

describe('product list', () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValueOnce({ data: mockedResponse });
  });

  test('should render product cards for each of the products', async () => {
    render(<ProductList initialData={mockedResponse} />);

    await waitFor(() => {
      expect(screen.getByText('Backpack')).toBeInTheDocument();
      expect(screen.getByText('Boots of Ppeed')).toBeInTheDocument();
      expect(screen.getByText('Curved Blade')).toBeInTheDocument();
    });

    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBe(3);
  });
});
