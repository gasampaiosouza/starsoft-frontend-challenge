'use client';

import Link from 'next/link';

import Cart from '../Cart';
import { Container } from './styles';

import Logo from '@/components/icons/logo';

const Header = () => {
  return (
    <Container>
      <Link className="logo" href="/">
        <Logo />
      </Link>

      <Cart />
    </Container>
  );
};

export default Header;
