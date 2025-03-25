'use client';

import styled from 'styled-components';
import Link from 'next/link';

import { DefaultButton } from '@/styles/global';

import { motion } from 'framer-motion';

export const Container = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  padding: 26px 24.5px;

  border-radius: ${({ theme }) => theme.radius.default};

  border: 1px solid transparent;
  transition: 0.15s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 16px 12px;
  }

  &:hover {
    background: #111216;
    border-color: #323541;
  }
`;

export const ProductLink = styled(Link)`
  cursor: pointer;
`;

export const ProductImage = styled.div`
  margin-bottom: 49px;

  width: 296px;
  height: 320px;
  position: relative;

  img {
    border-radius: ${({ theme }) => theme.radius.default};
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    height: 40vw;
  }
`;

export const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 500;

  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  font-weight: 300;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 72px;

  margin-bottom: 30px;
`;

export const ProductPrice = styled.span`
  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 600;

  svg {
    margin-right: 10px;
  }
`;

export const BuyButton = styled(DefaultButton)`
  margin-top: 24px;
`;
