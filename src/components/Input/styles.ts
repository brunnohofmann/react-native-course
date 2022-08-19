import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const FormField = styled.View`
  margin: 8px 0;
`;

export const InputContainer = styled.View`
  border-color: #fff;
  border-width: 1px;
  border-radius: 8px;
  padding: ${Platform.OS === 'ios' ? '18px' : 0} 20px;
`;

export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: '#fcfcfc',
  color: '#fff',
})``;
