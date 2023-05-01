import styled from 'styled-components/native';

type Props = {
  error?: boolean;
  errorColor: string;
};

export const Container = styled.View`
  width: 80%;
  margin-bottom: 10px;
`;

export const StyledInput = styled.TextInput<Props>`
  border: solid ${props => (props.error ? props.errorColor : 'grey')} 1px;
  padding: 5px;
  border-radius: 5px;
  margin-top: 4px;
  color: ${props => (props.error ? props.errorColor : 'white')};
`;
