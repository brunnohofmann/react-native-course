import React, {useContext, useEffect} from 'react';
import {FlatList, RefreshControl, Text} from 'react-native';
import {HeaderContainer, HeaderContent} from './styles';
import Avatar from '../../components/Avatar';
import {useAuth} from '../../context/AuthContext';
import Title from '../../components/Title';
import {Fakitter, getFakittersByUserIdService} from '../../services/fakitters';
import FakitterComp from '../../components/Fakitter';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from 'styled-components/native';

const OptionsScreen = () => {
  const {user} = useAuth();
  const [fakitters, setFakitters] = React.useState<Fakitter[]>([]);
  const [loading, setLoading] = React.useState(true);
  const {top} = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const fetchFakitters = async () => {
      setLoading(true);
      const fakittersData = await getFakittersByUserIdService(user.id);
      setFakitters(fakittersData);
      setLoading(false);
    };

    fetchFakitters();
  }, [user]);

  return (
    <>
      <FlatList
        ListHeaderComponentStyle={{
          backgroundColor: theme.secondary,
          padding: 20,
          paddingTop: top,
        }}
        refreshControl={
          <RefreshControl
            style={{backgroundColor: theme.secondary}}
            colors={['#9Bd35A', '#689F38']}
            refreshing={loading}
          />
        }
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <HeaderContainer>
            <Avatar size={60} user={user} />
            <HeaderContent>
              <Title weight="bold">{user.name}</Title>
              <Text>@{user.username}</Text>
            </HeaderContent>
          </HeaderContainer>
        )}
        data={fakitters}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <FakitterComp fakitter={item} />}
      />
    </>
  );
};

export default OptionsScreen;
