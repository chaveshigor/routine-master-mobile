import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SignUpCta = styled.Pressable`
  display: flex;
  flex-direction: row;
  margin-top: 64px;
  padding: 10px;
`;

export const LoginWith = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const LoginCompanies = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 32px;
`;

export const PressableIcon = styled.Pressable``;
