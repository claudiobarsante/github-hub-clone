import React from 'react';

import {
  Container,
  FlexAvatar,
  Avatar,
  Relations,
  PeopleIcon,
  Info,
  CompanyIcon,
  LocationIcon,
  BlogIcon,
  EmailIcon,
} from './styles';

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
const ProfileData = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}: Props) => {
  return (
    <Container>
      <FlexAvatar>
        <Avatar src={avatarUrl} alt={`image of ${name}`} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </FlexAvatar>
      <Relations>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Relations>
      <Info>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Info>
    </Container>
  );
};

export default ProfileData;
