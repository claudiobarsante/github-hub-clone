import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos } from './styles';
import ProfileData from './../../components/ProfileData/index';
import RepositoryCard from './../../components/RepositoryCard/index';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'claudiobarsante'}
            name={'Claudio Barsante'}
            avatarUrl={'https://avatars.githubusercontent.com/u/26095746?v=4'}
            followers={887}
            following={7}
            company={'Xcelent'}
            location={'Rio de Janeiro so colocando p teste, Brazil'}
            email={'clbmribas@gmail.com.email valido'}
            blog={undefined}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repositorys</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepositoryCard
                  key={n}
                  username={'tesrt'}
                  repositoryname={'teste-teste'}
                  description={'contains de description'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
