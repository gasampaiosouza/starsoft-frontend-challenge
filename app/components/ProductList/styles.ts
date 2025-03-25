'use client';

import styled from 'styled-components';

import { motion } from 'framer-motion';
import Loading from 'public/loading.svg';

export const Container = styled(motion.section)`
  margin-top: 289px; // 189px + fixed header size (100px)
  margin-bottom: 189px;
  margin-inline: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  gap: 25px;

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: 150px;
    margin-bottom: 90px;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`;

export const LoadingComponent = styled(Loading)`
  width: 200px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`
