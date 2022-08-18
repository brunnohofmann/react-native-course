import React from 'react';
import {TextInputProps} from 'react-native';
import {InputContainer, TextInput} from './styles';

const Input = (props: TextInputProps) => {
  return (
    <InputContainer>
      <TextInput {...props} />
    </InputContainer>
  );
};

export default Input;
