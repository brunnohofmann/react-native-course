import styled from 'styled-components/native';
import GoBackArrowIcon from '../../../assets/img/go-back-icon.svg';

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

export const GoBackButton = styled.TouchableOpacity`
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`;

export const GoBackIcon = styled(GoBackArrowIcon).attrs({
  fill: '#fff',
})`
  margin-right: 10px;
`;

export const GoBackText = styled.Text`
  color: #fff;
`;
