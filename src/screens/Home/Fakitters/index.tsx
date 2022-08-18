import React, {useEffect} from 'react';
import Header from '../../../components/Header';
import {Fakitter, getFakittersService} from '../../../services/fakitters';
import FakitterComp from '../../../components/Fakitter';
import {FlatList} from 'react-native';

const FakittersScreen = () => {
  const [fakitters, setFakitters] = React.useState<Fakitter[]>([]);

  useEffect(() => {
    const loadFakitters = async () => {
      const fakittersData = await getFakittersService();
      setFakitters(fakittersData);
    };

    loadFakitters();
  }, []);

  return (
    <>
      <Header />
      <FlatList
        data={fakitters}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <FakitterComp fakitter={item} />}
      />
    </>
  );
};

export default FakittersScreen;
