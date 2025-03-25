'use client';

import { DefaultButton } from '@/styles/global';
import styled from 'styled-components';

export const ContentContainer = styled.section`
  max-width: calc(1455px + 40px); // max width plus the padding
  min-height: calc(100vh - 270px);
  padding-inline: 20px;
  margin: 0 auto;

  margin-bottom: 189px;

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-inline: 8px;
  }
`;

export const ShowMoreButton = styled(DefaultButton)`
  padding-block: 30px;
  background: ${({ theme }) => theme.colors.secondary};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
