import React, {useState} from 'react';
import {
  BrandContainer,
  Container,
  FormContainer,
  GoBackButton,
  GoBackIcon,
  GoBackText,
} from './styles';
import FakitterLogo from '../../../assets/img/fakitter-logo.svg';
import {Platform} from 'react-native';
import {FormField} from '../../../components/Input/styles';
import InputText from '../../../components/Input';
import Button from '../../../components/Button/';
import {useNavigation} from '@react-navigation/native';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <Container>
      <BrandContainer>
        <FakitterLogo fill="#fff" width={80} height={80} />
      </BrandContainer>

      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <FormField>
          <InputText
            onChangeText={setName}
            maxLength={50}
            keyboardType="default"
            placeholder="Name"
          />
        </FormField>
        <FormField>
          <InputText
            onChangeText={setUserName}
            maxLength={50}
            keyboardType="default"
            placeholder="Username"
          />
        </FormField>
        <FormField>
          <InputText
            onChangeText={setEmail}
            maxLength={50}
            keyboardType="email-address"
            placeholder="Email"
          />
        </FormField>
        <FormField>
          <InputText
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
            onPress={() => {}}
          />
        </FormField>
      </FormContainer>

      <GoBackButton onPress={() => navigation.goBack()}>
        <GoBackIcon />

        <GoBackText>Voltar</GoBackText>
      </GoBackButton>
    </Container>
  );
};
