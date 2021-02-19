import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
} from './styles';

interface Props {
  key: number;
  username: string;
  repositoryname: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}

const RepositoryCard = ({
  key,
  username,
  repositoryname,
  description,
  language,
  stars,
  forks,
}: Props) => {
  const languageClass = language ? language.toLocaleLowerCase() : 'other';
  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${repositoryname}`}>{repositoryname}</Link>
        </header>
        <p>{description}</p>
      </Topside>
      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepositoryCard;
