import React from 'react';
import {Text} from 'react-native';

type Props = {
  text: string;
  fontSize?: number;
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

export default function DefaultText({
  text,
  fontSize = 12,
  fontWeight,
  color = 'white',
}: Props) {
  return (
    <Text style={{fontSize: fontSize, fontWeight: fontWeight, color: color}}>
      {text}
    </Text>
  );
}
