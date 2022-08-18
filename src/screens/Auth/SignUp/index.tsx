import React, {useState, useCallback} from 'react';
import {Platform, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  BrandContainer,
  Container,
  KeyboardAvoidingView,
  GoBackButton,
  GoBackIcon,
  GoBackText,
} from './styles';
import FakitterLogo from '../../../assets/img/fakitter-logo.svg';
import {FormField} from '../../../components/Input/styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button/';
import {register} from '../../../services/auth';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = useCallback(async () => {
    setLoading(true);

    try {
      await register({name, username, email, password});

      setLoading(false);

      Alert.alert('Tudo Certo!', 'Seu cadastro foi feito com sucesso.', [
        {
          text: 'Ir para login',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch {
      setLoading(false);

      Alert.alert('Algo deu errado!', 'Seu cadastro não foi feito.', [
        {
          text: 'Tentar novamente',
        },
      ]);
    }
  }, [name, username, email, password, navigation]);

  return (
    <Container>
      <BrandContainer>
        <FakitterLogo fill="#fff" width={80} height={80} />
      </BrandContainer>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <FormField>
          <Input
            onChangeText={setName}
            maxLength={50}
            keyboardType="default"
            placeholder="Name"
          />
        </FormField>
        <FormField>
          <Input
            onChangeText={setUserName}
            maxLength={50}
            keyboardType="default"
            placeholder="Username"
          />
        </FormField>
        <FormField>
          <Input
            onChangeText={setEmail}
            maxLength={50}
            keyboardType="email-address"
            placeholder="Email"
          />
        </FormField>
        <FormField>
          <Input
            onChangeText={setPassword}
            maxLength={12}
            placeholder="Password"
            secureTextEntry
          />
        </FormField>
        <FormField>
          <Button
            loading={loading}
            title="Criar minha conta"
            onPress={handleSignUp}
          />
        </FormField>

        <GoBackButton onPress={() => navigation.goBack()}>
          <GoBackIcon />

          <GoBackText>Voltar</GoBackText>
        </GoBackButton>
      </KeyboardAvoidingView>
    </Container>
  );
};
