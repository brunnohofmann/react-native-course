import React from 'react';
import {AvatarContainer, AvatarText} from './styles';
import {generateColorByString} from '../../utils/colors';
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
      <AvatarText size={size}>{initials}</AvatarText>
    </AvatarContainer>
  );
};

export default Avatar;
