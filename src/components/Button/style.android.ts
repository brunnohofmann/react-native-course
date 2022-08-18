import styled from 'styled-components/native';

export const ButtonContainer = styled.Pressable`
  background-color: ${({theme}) =>
    theme.components.button.secondary.backgroundColor};
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const ActivityIndicatorContainer = styled.View`
  padding-right: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.components.button.primary.textColor};
  font-size: 16px;
  text-align: center;
`;
