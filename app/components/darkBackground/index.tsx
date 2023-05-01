import React, {PropsWithChildren} from 'react';
import {Container} from './style';
import {StatusBar} from 'react-native';

export function DarkBackground({children}: PropsWithChildren) {
  return (
    <Container
      colors={['#2A2A2E', '#2B125A', 'black']}
      start={{x: 0, y: 0}}
      end={{x: 0.5, y: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="rgba(0,0,0,.9)" />
      {children}
    </Container>
  );
}
