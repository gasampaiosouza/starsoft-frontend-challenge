'use client';

import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  
  width: 100%;
  height: 76px;
  padding: 25px 0;

  margin-top: 189px;

  p {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.secondary};
    letter-spacing: 2px;

    opacity: 0.44;
  }
`;
