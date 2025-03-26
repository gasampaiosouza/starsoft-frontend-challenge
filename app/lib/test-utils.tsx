import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import Providers from '@/Providers';

const renderWithProviders = (ui: ReactNode, options = {}) => {
  render(<Providers>{ui}</Providers>, options);
};

export * from '@testing-library/react';
export { renderWithProviders as render };
