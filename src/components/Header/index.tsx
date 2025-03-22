import Link from 'next/link';
import Cart from '../Cart';
import { Container } from './styles';

import Logo from 'public/logo.svg';

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Logo />
      </Link>

      <Cart />
    </Container>
  );
};

export default Header;
