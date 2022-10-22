import React from 'react';
import styled from 'styled-components/native';

export function Loading() {
  return (
    <Container>
      <LoadingIcon size="large" color="#0000" />
    </Container>
  );
}

export const Container = styled.SafeAreaView`
  background-color: #019972;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
