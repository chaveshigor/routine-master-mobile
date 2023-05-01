import {View} from 'react-native';
import DefaultText from '../../components/defaultText';
import React, {useState} from 'react';
import {DarkBackground} from '../../components/darkBackground';
import {
  Container,
  LoginCompanies,
  LoginForm,
  LoginWith,
  PressableIcon,
  SignUpCta,
} from './style';
import {DefaultInput} from '../../components/defaultInput';
import {LightButton} from '../../components/lightButton';
import {Divider} from '../../components/divider';
import Icon from 'react-native-vector-icons/AntDesign';
// import CreateSession from '../../api/sessions/create';
import createSessionForm from '../../forms/sessions/create';
import validateForm, {ValidationError} from '../../forms/validate';

type UserInfo = {
  email: string;
  password: string;
};

type ErrorInfo = {
  email: null | string;
  password: null | string;
};

export function SignIn() {
  const [loginInfo, setLoginInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });
  const [errorInfo, setErrorInfo] = useState<ErrorInfo>({
    email: null,
    password: null,
  });

  const cleanFormErrors = () => {
    setErrorInfo({
      email: null,
      password: null,
    });
  };

  const login = async () => {
    cleanFormErrors();
    console.log(loginInfo);
    const formValidation = await validateForm(createSessionForm, loginInfo);

    console.log(formValidation, 'result');

    if (formValidation === true) {
      // console.log(loginInfo, 'aaaaa');
      // const createSessionKlass = new CreateSession(loginInfo);
      // const response = (await createSessionKlass.run()) as any;
      // console.log('agora vai', response.headers['map']['authorization']);
    } else {
      const formError = formValidation as ValidationError;
      const refreshState = errorInfo;
      console.log(formError);

      refreshState[formError.field as keyof ErrorInfo] = formError.message;
      setErrorInfo(refreshState);
    }
  };

  return (
    <DarkBackground>
      <Container>
        <View style={{marginBottom: 64}}>
          <DefaultText
            text="Bem vindo de volta"
            fontSize={32}
            fontWeight="bold"
          />
          <DefaultText text="Faça seu login" />
        </View>

        <LoginForm>
          <DefaultInput
            value={loginInfo.email}
            placeholder="Email"
            type="email-address"
            error={errorInfo.email ? true : false}
            tip={errorInfo.email}
            onChange={value =>
              setLoginInfo({
                ...loginInfo,
                email: value,
              })
            }
          />
          <DefaultInput
            value={loginInfo.password}
            placeholder="Senha"
            isSecure
            error={errorInfo.password ? true : false}
            tip={errorInfo.password}
            onChange={value =>
              setLoginInfo({
                ...loginInfo,
                password: value,
              })
            }
          />
          <LightButton spaceY={32} width={'80%'} onPress={() => login()}>
            <DefaultText
              text="Login"
              fontSize={16}
              fontWeight="bold"
              color="black"
            />
          </LightButton>

          <LoginWith>
            <Divider color="white" size="30%" />
            <DefaultText text="login com" fontSize={14} />
            <Divider color="white" size="30%" />
          </LoginWith>

          <LoginCompanies>
            <PressableIcon onPress={() => console.log('login com google')}>
              <Icon name="google" size={48} color="white" />
            </PressableIcon>

            <PressableIcon onPress={() => console.log('login com github')}>
              <Icon name="github" size={48} color="white" />
            </PressableIcon>
          </LoginCompanies>

          <SignUpCta onPress={() => console.log('criar conta')}>
            <DefaultText text="Não tem conta?" color="white" />
            <DefaultText text=" Cadastre-se" color="white" fontWeight="bold" />
          </SignUpCta>
        </LoginForm>
      </Container>
    </DarkBackground>
  );
}
