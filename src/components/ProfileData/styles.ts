import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMap2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled.div``;

export const FlexAvatar = styled.div`
  display: flex;
  align-items: center;
  /*'>' element that it's direct children*/
  > div {
    margin-left: 24px;

    > h1 {
      font-size: 2.6rem;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }
    > h2 {
      font-size: 2rem;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;
export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const Relations = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: -ms-wrap-flow; //when collapsing break into another line
  margin: 20px 0px;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 1.4rem;
      color: var(--gray);
    }

    > * {
      margin-right: 5px;
    }
  }
`;
export const Info = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
  /*li + li = after de first li*/
  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;

    /*avoid text out <li> and when collapsing show ellipsis '...'*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; //Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line
  }
`;

const iconCss = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCss}
`;
export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCss}
`;
export const LocationIcon = styled(RiMap2Line)`
  ${iconCss}
`;
export const BlogIcon = styled(RiLinksLine)`
  ${iconCss}
`;
export const EmailIcon = styled(RiMailLine)`
  ${iconCss}
`;
