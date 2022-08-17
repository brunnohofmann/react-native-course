import React from 'react';
import {Platform} from 'react-native';
import {BrandContainer, Container, FormContainer} from './styles';
import FakitterLogo from '../../../assets/img/fakitter-logo.svg';
import InputText from '../../../components/Input';
import {FormField} from '../../../components/Input/styles';
import Button from '../../../components/Button';
import {login} from '../../../services/auth';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const userData = await login(email, password);
    setLoading(false);
  };

  return (
    <Container>
      <BrandContainer>
        <FakitterLogo fill="#fff" width={100} height={100} />
      </BrandContainer>
      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
          <Button loading={loading} title="Login" onPress={handleSubmit} />
        </FormField>
      </FormContainer>
    </Container>
  );
};

export default LoginScreen;
