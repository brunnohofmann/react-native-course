import styled from 'styled-components/native';

type AvatarContainerProps = {
  size: number;
  color: string;
};

export const AvatarContainer = styled.View<AvatarContainerProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  padding: ${props => props.size / 4}px;
`;

export const AvatarText = styled.Text<{size: number}>`
  font-size: ${props => props.size / 3}px;
`;
