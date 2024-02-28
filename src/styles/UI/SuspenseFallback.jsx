import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingIcon = styled(motion.div)`
  width: 6.4rem;
  height: 6.4rem;
  border: 0.8rem solid #ecf6fa;
  border-top: 0.8rem solid #1e3e67;
  border-radius: 50%;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuspenseFallback = () => {
  return (
    <LoadingContainer>
      <LoadingIcon
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      />
      <h2>Loading...</h2>
      <h2>読み込み中...</h2>
    </LoadingContainer>
  );
};

export default SuspenseFallback;
