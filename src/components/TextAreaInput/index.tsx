import React from 'react';
import {TextInputProps} from 'react-native';
import {InputContainer, TextInput} from './styles';

const TextAreaInput = (props: TextInputProps) => {
  return (
    <InputContainer>
      <TextInput {...props} multiline />
    </InputContainer>
  );
};

export default TextAreaInput;
