import React, {useState, useCallback} from 'react';
import {Alert} from 'react-native';
import {postFakkit} from '../../services/fakitters';
import Header from '../../components/Header';
import TextAreaInput from '../../components/TextAreaInput';
import {
  Container,
  PostContainer,
  SendButton,
  SendButtonIcon,
  SendButtonText,
  ActivityIndicator,
} from './styles';
import {useAuth} from '../../context/AuthContext';

export const PostFakkiter = () => {
  const [fakkit, setFakkit] = useState('');
  const [loading, setLoading] = useState(false);

  const {user} = useAuth();

  const handlePostFakkit = useCallback(async () => {
    setLoading(true);

    try {
      const postData = {
        data: {
          text: fakkit,
          user: user.id,
        },
      };

      await postFakkit(postData);

      setLoading(false);
      setFakkit('');

      Alert.alert('Tudo Certo!', 'Fakkit postado com sucesso.', [
        {
          text: 'Ok!',
        },
      ]);
    } catch (error) {
      setLoading(false);

      console.log({error});

      Alert.alert('Algo deu errado!', 'Não foi possível postar o seu fakkit.', [
        {
          text: 'Tentar novamente',
        },
      ]);
    }
  }, [fakkit, user.id]);

  return (
    <Container>
      <Header />

      <PostContainer>
        <TextAreaInput
          onChangeText={setFakkit}
          maxLength={260}
          keyboardType="default"
          placeholder="Escreva o seu fakkit..."
          value={fakkit}
        />

        <SendButton onPress={handlePostFakkit}>
          <SendButtonText>Fakkitar</SendButtonText>

          {loading ? <ActivityIndicator /> : <SendButtonIcon />}
        </SendButton>
      </PostContainer>
    </Container>
  );
};
