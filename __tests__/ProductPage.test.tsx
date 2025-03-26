import ProductInfoContent from '@/components/ProductInfoContent';
import { render } from '@/lib/test-utils';
import { screen, waitFor } from '@testing-library/react';

import mockedResponse from './mockedResponse';

describe('product page', () => {
  test('should render the correct product page information', async () => {
    const id = 2;
    const correctProduct = mockedResponse.data.find(
      (product) => product.id === id
    );

    render(<ProductInfoContent product={correctProduct} />);

    await waitFor(() => {
      expect(screen.getByText(correctProduct!.name)).toBeInTheDocument();
      expect(screen.getByText(correctProduct!.description)).toBeInTheDocument();
      expect(
        screen.getByText(`${correctProduct!.price} ETH`)
      ).toBeInTheDocument();
    });
  });

  test('should render a not found page', async () => {
    render(<ProductInfoContent product={undefined} />);

    expect(
      screen.getByText('O produto que você está procurando não existe')
    ).toBeInTheDocument();
  });
});
