import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components/native';

import {BrandContainer, Container} from './styles';
import Avatar from '../Avatar';
import Brand from '../../assets/img/fakitter-logo.svg';
import LogoutIcon from '../../assets/img/logout-icon.svg';
import {useAuth} from '../../context/AuthContext';

const Header = () => {
  const {user, signOut} = useAuth();
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Avatar size={30} user={user} />
      <BrandContainer>
        <Brand fill={theme.primary} width={36} height={36} />
      </BrandContainer>
      <TouchableOpacity onPress={signOut}>
        <LogoutIcon fill="#159d98" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
