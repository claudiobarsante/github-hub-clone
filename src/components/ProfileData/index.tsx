import React from 'react';

//import { Container } from './styles';

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}
const ProfileData: React.FC<Props> = () => {
  return <div />;
};

export default ProfileData;
