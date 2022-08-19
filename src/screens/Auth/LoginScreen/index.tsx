import React, {useEffect, useRef} from 'react';
import {Platform, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  BrandContainer,
  Container,
  CreateMyAccountButton,
  CreateMyAccountIcon,
  CreateMyAccountText,
  KeyboardAvoidingView,
} from './styles';
import FakitterLogo from '../../../assets/img/fakitter-logo.svg';
import StyledTextInput from '../../../components/Input';
import {FormField} from '../../../components/Input/styles';
import Button from '../../../components/Button';
import {useAuth} from '../../../context/AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const passwordInputRef = useRef<TextInput>(null);

  const {signIn, user} = useAuth();
  const navigation = useNavigation();

  const handleSubmit = async () => {
    setLoading(true);
    await signIn({email, password});
    setLoading(false);
  };

  useEffect(() => {
    console.log({user});
  }, [user]);

  return (
    <Container>
      <BrandContainer>
        <FakitterLogo fill="#fff" width={100} height={100} />
      </BrandContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <FormField>
          <StyledTextInput
            onChangeText={setEmail}
            maxLength={50}
            keyboardType="email-address"
            placeholder="Email"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />
        </FormField>
        <FormField>
          <StyledTextInput
            ref={passwordInputRef}
            onChangeText={setPassword}
            maxLength={12}
            placeholder="Password"
            secureTextEntry
            onSubmitEditing={handleSubmit}
          />
        </FormField>
        <FormField>
          <Button loading={loading} title="Login" onPress={handleSubmit} />
        </FormField>

        <CreateMyAccountButton
          onPress={() => navigation.navigate('SignUpScreen' as never)}>
          <CreateMyAccountIcon />

          <CreateMyAccountText>Criar minha conta</CreateMyAccountText>
        </CreateMyAccountButton>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginScreen;
