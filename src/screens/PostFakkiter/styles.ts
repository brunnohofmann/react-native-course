import styled from 'styled-components/native';

import SendIcon from '../../assets/img/send-icon.svg';

export const Container = styled.View`
  height: 100%;
`;

export const PostContainer = styled.KeyboardAvoidingView`
  padding: 20px;

  flex: 1;
  justify-content: space-between;
`;

export const SendButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) =>
    theme.components.button.primary.backgroundColor};
  border-radius: 8px;
  height: 60px;
  margin-bottom: 60px;
`;

export const SendButtonIcon = styled(SendIcon).attrs({
  fill: '#fff',
})`
  height: 20px;
  width: 20px;
  margin-left: 14px;
`;

export const SendButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: '#fff',
})`
  height: 20px;
  width: 20px;
  margin-left: 14px;
`;
