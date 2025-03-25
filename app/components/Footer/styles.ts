'use client';

import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  
  width: 100%;
  height: 76px;
  padding: 25px 0;

  p {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.secondary};
    letter-spacing: 2px;
    text-align: center;

    opacity: 0.44;

    @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 12px;
    }
  }
`;
