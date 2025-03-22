'use client';

import { DefaultButton } from '@/styles/global';
import styled from 'styled-components';

export const ContentContainer = styled.section`
  max-width: calc(1455px + 40px); // max width plus the padding
  padding-inline: 20px;
  margin: 0 auto;

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-inline: 8px;
  }
`;

export const ShowMoreButton = styled(DefaultButton)`
  padding-block: 30px;
  background: ${({ theme }) => theme.colors.secondary};
`;
