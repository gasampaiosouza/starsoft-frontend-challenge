'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 403px;
  margin-inline: auto;
`;

export const ProgressOuter = styled.div`
  width: 100%;
  height: 10px;

  border-radius: ${({ theme }) => theme.radius.default};
  background: ${({ theme }) => theme.colors.secondary};

  margin-bottom: 11px;

  position: relative;
`;

export const ProgressInner = styled.div<{ $progress: number }>`
  border-radius: ${({ theme }) => theme.radius.default};
  background: ${({ theme }) => theme.colors.primary};

  position: absolute;
  left: 0;
  top: 0;

  transition: .5s ease-in-out;

  height: 100%;
  width: ${({ $progress }) => `${$progress}%`};
`;
