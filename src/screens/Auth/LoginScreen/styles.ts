import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BrandContainer = styled.View`
  margin: 16px;
`;

export const FormContainer = styled.KeyboardAvoidingView``;
