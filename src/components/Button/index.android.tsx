import React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  ActivityIndicatorContainer,
  ButtonContainer,
  ButtonText,
} from './style.ios';

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

const Button = ({title, loading, onPress}: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      {loading && (
        <ActivityIndicatorContainer>
          <ActivityIndicator size="small" color="#fff" />
        </ActivityIndicatorContainer>
      )}
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
