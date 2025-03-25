'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background: #2b2b2b;
  padding: 19.5px 30px;
  border-radius: ${({ theme }) => theme.radius.default};

  display: flex;
  align-items: center;
  gap: 31px;

  border: 1px solid transparent;
  transition: 0.2s ease-in-out;

  &:hover {
    border-color: #555;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartProductImage = styled.div`
  --size: 161px;

  width: 100%;
  max-width: var(--size);
  height: var(--size);

  position: relative;

  img {
    border-radius: ${({ theme }) => theme.radius.default};
  }
`;

export const CartProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CartProductName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const CartProductDescription = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 16px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CartProductPrice = styled.div`
  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 600;

  svg {
    margin-right: 10px;
  }
`;

export const CartProductControls = styled.div`
  margin-top: 16px;

  display: flex;
  justify-content: space-between;
  gap: 25px;

  width: 100%;
`;

export const QuantitySelectorContainer = styled(motion.div)`
  background: #232323;
  border-radius: ${({ theme }) => theme.radius.default};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const defaultStyling = `
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  padding: 14.5px;
`;

export const QuantityMinus = styled.div`
  ${defaultStyling}
  padding-left: 8px;
`;

export const QuantityPlus = styled.div`
  ${defaultStyling}
  padding-right: 8px;
`;

export const CurrentQuantity = styled.input`
  font-size: 14px;
  font-weight: 600;

  text-align: center;

  color: ${({ theme }) => theme.colors.text.default};
  background: transparent;

  max-width: 50px;
  height: 100%;
`;

export const RemoveProductButton = styled.button`
  --size: 43px;

  width: var(--size);
  height: var(--size);

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(1.1);
  }
`;
