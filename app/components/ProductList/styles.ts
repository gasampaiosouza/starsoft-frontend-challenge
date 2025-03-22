'use client';

import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 289px; // 189px + fixed header size (100px)
  margin-bottom: 189px;
  margin-inline: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  gap: 25px;

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: 150px;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`;
