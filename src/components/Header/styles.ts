'use client';

import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  width: 100%;
  height: 100px;
  padding: 30px 40px;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  background: rgba(35, 35, 35, 0.45);
`;
