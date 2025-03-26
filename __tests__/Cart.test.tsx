import CartProduct from '@/components/Cart/CartProduct';
import { render } from '@/lib/test-utils';
import { screen } from '@testing-library/react';

import mockedResponse from './mockedResponse';

describe('cart features', () => {
  const product = mockedResponse.data[0];
  const quantityToBeRendered = 5;

  it('should render the product name correctly', () => {
    render(<CartProduct product={product} />);

    const productName = screen.getByText(product.name);
    expect(productName).toBeInTheDocument();
  });

  it('should render the product price correctly', () => {
    render(<CartProduct product={product} />);

    const productPrice = screen.getByText(`${product.price} ETH`);
    expect(productPrice).toBeInTheDocument();
  });

  it('should render the correct product quantity coming from the product', () => {
    render(<CartProduct product={product} />);

    const currentQuantityInput = screen.getByRole('textbox');
    expect(currentQuantityInput).toHaveValue(String(quantityToBeRendered));
  });
});
