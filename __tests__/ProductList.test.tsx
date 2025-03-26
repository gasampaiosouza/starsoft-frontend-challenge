import ProductList from '@/components/ProductList';
import { render } from '@/lib/test-utils';
import { IProduct } from '@/types/products';
import { screen, waitFor } from '@testing-library/react';

import mockedResponse from './mockedResponse';

jest.mock(
  '../app/components/Product',
  () =>
    ({ product }: { product: IProduct }) =>
      <div data-testid="product-card">{product.name}</div>
);

global.fetch = jest.fn();

describe('product list', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockedResponse),
    });
  });

  test('should render product cards for each of the products', async () => {
    render(<ProductList initialData={mockedResponse} />);

    await waitFor(() => {
      mockedResponse.data.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
      });
    });

    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBe(mockedResponse.data.length);
  });
});
