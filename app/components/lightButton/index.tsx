import React, {ReactNode} from 'react';
import {Container} from './style';

interface Props {
  children: ReactNode;
  onPress: () => void;
  width?: number | string;
  spaceY?: number;
}

export function LightButton({children, onPress, width, spaceY}: Props) {
  return (
    <Container style={{width: width, marginTop: spaceY}} onPress={onPress}>
      {children}
    </Container>
  );
}
