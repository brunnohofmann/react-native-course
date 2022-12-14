import styled from 'styled-components/native';
import CreateAccountIcon from '../../../assets/img/create-account-icon.svg';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BrandContainer = styled.View`
  margin: 16px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

export const CreateMyAccountButton = styled.TouchableOpacity`
  margin: 20px auto 0;

  flex-direction: row;
  align-items: center;
`;

export const CreateMyAccountIcon = styled(CreateAccountIcon).attrs({
  fill: '#fff',
})`
  margin-right: 10px;
`;

export const CreateMyAccountText = styled.Text`
  color: #fff;
`;
