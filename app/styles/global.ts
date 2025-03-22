'use client';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {      
      color: ${({ theme }) => theme.colors.text.default};
      background: ${({ theme }) => theme.pageBackground};
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
    background-color: #232323;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #FF8310;
  }
`;

export const DefaultButton = styled.button`
  color: ${({ theme }) => theme.colors.text.default};
  background: ${({ theme }) => theme.colors.primary};

  padding: 22px 0;

  font-size: 16px;
  font-weight: 600;

  border-radius: ${({ theme }) => theme.radius.default};

  width: 100%;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default GlobalStyles;
