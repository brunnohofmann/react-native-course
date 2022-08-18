import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';

import {BrandContainer, Container} from './styles';
import Avatar from '../Avatar';
import Brand from '../../assets/img/fakitter-logo.svg';

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Avatar size={40} />
      <BrandContainer>
        <Brand fill={theme.primary} width={36} height={36} />
      </BrandContainer>
    </Container>
  );
};

export default Header;