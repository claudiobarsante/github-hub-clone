import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const Header = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Enter username or repository" />
      </SearchForm>
    </Container>
  );
};

export default Header;
