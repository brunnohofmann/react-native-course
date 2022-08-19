import styled from 'styled-components/native';

export const FormField = styled.View`
  margin: 8px 0;
`;

export const InputContainer = styled.View`
  background-color: #fff;
  border-color: ${({theme}) => theme.primary};
  border-width: 2px;
  border-radius: 8px;
  padding: 0 20px;
  height: 200px;
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.primary,
  color: theme.textColor,
}))``;
