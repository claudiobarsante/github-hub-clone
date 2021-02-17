import React from 'react';
import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from './../../components/ProfileData/index';

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
            location={'Rio de Janeiro, Brazil'}
            email={'clbmribas@gmail.com'}
            blog={null}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
