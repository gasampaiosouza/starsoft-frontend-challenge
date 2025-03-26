'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

import { DefaultButton } from '@/styles/global';

import { QuantitySelectorContainer } from '../Cart/CartProduct/styles';

export const Container = styled.article`
  padding: 26px 24.5px;

  border-radius: ${({ theme }) => theme.radius.default};

  border: 1px solid transparent;
  transition: 0.15s ease-in-out;

  margin-inline: auto;
  margin-top: 100px;

  max-width: 1400px;
`;

export const ProductContent = styled(motion.div)``;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 8px;

  background: #373737;

  max-width: 110px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.default};

  font-size: 15px;
  color: #fff;
  width: auto;

  margin-bottom: 25px;
  line-height: 2.5;

  transition: 0.2s ease-in-out;

  svg {
    width: 25px;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;

export const ProductImage = styled(motion.div)`
  display: flex;
  margin-bottom: 49px;

  --size: 600px;

  min-width: var(--size);
  min-height: var(--size);
  position: relative;

  &,
  img {
    border-radius: ${({ theme }) => theme.radius.default};
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    max-width: 380px;
    height: 40vh;

    margin-bottom: 0;
  }
`;

export const ProductName = styled(motion.h2)`
  font-size: 32px;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const ProductDescription = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
  font-weight: 300;

  margin-bottom: 20px;

  max-width: 700px;
`;

export const ProductPrice = styled(motion.span)`
  display: flex;
  align-items: center;

  margin-top: 8px;
  margin-bottom: 40px;

  font-size: 25px;
  font-weight: 600;

  svg {
    margin-right: 10px;
  }
`;

export const BuyButton = styled(DefaultButton)`
  margin-top: 24px;
`;

export const ProductQuantityLabel = styled(motion.span)`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
`;

export const ProductQuantitySelector = styled(QuantitySelectorContainer)`
  max-width: 200px;
  margin-bottom: 25px;

  padding: 8px;

  background: ${({ theme }) => theme.colors.background};
  border: 1px solid #323541;

  input {
    font-size: 16px;
  }
`;

export const NotFoundContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-inline: 30px;

  width: 100%;
  height: calc(100vh - 230px);

  margin-top: 150px;

  h3 {
    font-size: 28px;
    margin-bottom: 25px;

    text-align: center;

    @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 20px;
    }
  }
`;
