import React from 'react';
import Header from '../../../components/Header';
import {Fakitter} from '../../../services/fakitters';
import FakitterComp from '../../../components/Fakitter';
import {useAuth} from '../../../context/AuthContext';

const FakittersScreen = () => {
  const {user} = useAuth();

  const singleFakitter: Fakitter = {
    id: 1,
    user,
    text: 'Este um exemplo de um fakitter',
    createdAt: new Date(),
  };

  return (
    <>
      <Header />
      <FakitterComp fakitter={singleFakitter} />
    </>
  );
};

export default FakittersScreen;
