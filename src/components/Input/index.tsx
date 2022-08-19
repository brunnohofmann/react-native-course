import React, {forwardRef} from 'react';
import {TextInputProps, TextInput} from 'react-native';
import {InputContainer, StyledTextInput} from './styles';

const Input = forwardRef<TextInput, TextInputProps>((props, ref) => {
  return (
    <InputContainer>
      <StyledTextInput {...props} ref={ref} />
    </InputContainer>
  );
});

export default Input;
