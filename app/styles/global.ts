'use client';

import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyles = createGlobalStyle`
  html,
  body {      
      color: ${({ theme }) => theme.colors.text.default};
      background: ${({ theme }) => theme.pageBackground};
  }

  :root {
    --toastify-color-success: ${({ theme }) => theme.colors.primary};
    --toastify-font-family: ${({ theme }) => theme.font.default};
    --toastify-color-dark: ${({ theme }) => theme.colors.background};
  }

  .Toastify__toast {
    font-size: 14px;
    line-height: 1.6;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
      outline: none;
      border: 0;
    }

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: ${({ theme }) => theme.font.default};
  }

  *::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.pageBackground};
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DefaultButton = styled(motion.button)`
  color: ${({ theme }) => theme.colors.text.default};
  background: ${({ theme }) => theme.colors.primary};

  padding: 22px 0;

  font-size: 16px;
  font-weight: 600;

  border-radius: ${({ theme }) => theme.radius.default};

  width: 100%;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default GlobalStyles;
