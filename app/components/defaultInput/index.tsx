import React, {useState} from 'react';
import {Container, StyledInput} from './style';
import DefaultText from '../defaultText';
import {KeyboardTypeOptions} from 'react-native/types';

type Props = {
  value?: string;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  isSecure?: boolean;
  error?: boolean;
  tip?: string | null;
  onChange(value: string): void;
};

export function DefaultInput({
  value,
  placeholder,
  type,
  isSecure,
  error,
  tip,
  onChange,
}: Props) {
  const [errorColor, _setErrorColor] = useState<string>('#bb2828');

  return (
    <Container>
      <DefaultText
        text={placeholder || ''}
        color={error ? errorColor : undefined}
        fontWeight={error ? 'bold' : 'normal'}
      />
      <StyledInput
        value={value}
        keyboardType={type || 'default'}
        secureTextEntry={isSecure || false}
        onChangeText={onChange}
        error={error}
        errorColor={errorColor}
      />
      {tip ? <DefaultText text={tip} color={errorColor} /> : <></>}
    </Container>
  );
}
