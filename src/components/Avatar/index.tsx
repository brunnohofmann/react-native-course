import React from 'react';
import {AvatarContainer} from './styles';
import {generateColorByString} from '../../utils/colors';
import {Text} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import {getInitialsByName} from '../../utils/strings';

type AvatarProps = {
  size: number;
};

const Avatar = ({size}: AvatarProps) => {
  const {user} = useAuth();
  const initials = getInitialsByName(user.name || '');
  const [color] = React.useState(generateColorByString(user.name || ''));

  return (
    <AvatarContainer size={size} color={color}>
      <Text>{initials}</Text>
    </AvatarContainer>
  );
};

export default Avatar;
