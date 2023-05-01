import React from 'react';
import {View} from 'react-native';

type Props = {
  color: string;
  size: number | string;
};

export function Divider({color, size}: Props) {
  return <View style={{backgroundColor: color, width: size, height: 1}} />;
}
