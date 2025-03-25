'use client';

import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div``;

const cartWidth = '679px';
export const CartContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;

  width: ${cartWidth};
  height: 100%;

  padding: 63px 30px 20px;

  background: ${({ theme }) => theme.pageBackground};

  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;

  z-index: 12;

  @media only screen and (max-width: ${cartWidth}) {
    width: 100vw;
    padding-top: 40px;
  }
`;

export const Overlay = styled.div<{ $show: 1 | 0 }>`
  position: fixed;
  inset: 0;
  background: rgba(17, 18, 22, 0.5);
  z-index: 11;

  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};

  backdrop-filter: blur(2px);

  transition: 0.2s ease-in-out;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  background: #373737;

  position: absolute;
  left: 0;

  width: 60px;
  height: 60px;
  border-radius: 50%;

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const OpenCartButton = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  cursor: pointer;

  > span {
    color: ${({ theme }) => theme.colors.text.primary};

    font-size: 20px;
    font-family: ${({ theme }) => theme.font.secondary};
  }
`;

export const CartHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  /* margin-bottom: 165px; */ // thats how the layout goes, but its too big :/
  margin-bottom: 60px;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: flex-end;

    h2 {
      font-size: 18px;
    }
  }
`;

export const CartTotal = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;

  &,
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  font-size: 24px;
  font-weight: 700;

  svg {
    margin-right: 10px;
  }

  div {
    font-weight: 600;
  }
`;

export const AddedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  max-height: 100%;
  overflow: auto;
  overflow-x: hidden;
  padding-right: 10px;
`;

export const CartFooter = styled.footer`
  margin-top: auto;
`;

export const EmptyCartMessage = styled.h3`
  text-align: center;
`;