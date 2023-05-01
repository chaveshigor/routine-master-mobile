import {View} from 'react-native';
import {DarkBackground} from '../../components/darkBackground';
import React from 'react';
import {Container} from './style';
import {LightButton} from '../../components/lightButton';
import DefaultText from '../../components/defaultText';
import {useNavigation} from '@react-navigation/native';

export function Welcome() {
  const navigation = useNavigation();

  return (
    <DarkBackground>
      <Container>
        <View>
          <View style={{marginBottom: 64}}>
            <DefaultText
              text="routine.master"
              fontSize={32}
              fontWeight="bold"
            />
            <DefaultText text="Crie uma nova rotina" />
          </View>

          <LightButton onPress={() => navigation.navigate('SignIn' as never)}>
            <DefaultText
              text="START"
              color="black"
              fontSize={16}
              fontWeight="bold"
            />
          </LightButton>
        </View>
      </Container>
    </DarkBackground>
  );
}
