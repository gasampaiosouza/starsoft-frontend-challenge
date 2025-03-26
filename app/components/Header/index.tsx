'use client';

import Link from 'next/link';
import Cart from '../Cart';
import { Container } from './styles';

import Logo from '@/components/icons/logo';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import { increment, selectCount } from '@/lib/features/counterSlice';

const Header = () => {
  // const dispatch = useAppDispatch();
  // const count = useAppSelector(selectCount);

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
