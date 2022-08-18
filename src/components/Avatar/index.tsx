import React from 'react';
import {AvatarContainer} from './styles';
import {generateColorByString} from '../../utils/colors';
import {Text} from 'react-native';
import {getInitialsByName} from '../../utils/strings';
import {User} from '../../services/auth';

type AvatarProps = {
  size: number;
  user: User;
};

const Avatar = ({size, user}: AvatarProps) => {
  const initials = getInitialsByName(user.name || '');
  const [color] = React.useState(generateColorByString(user.name || ''));

  return (
    <AvatarContainer size={size} color={color}>
      <Text>{initials}</Text>
    </AvatarContainer>
  );
};

export default Avatar;
