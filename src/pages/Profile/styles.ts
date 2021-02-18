import styled from 'styled-components';

//mobile first
export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
`;

export const Main = styled.div`
  display: flex;
  //mobile first, change de direction to column
  flex-direction: column;
`;
export const LeftSide = styled.div`
  //in a desktop screen uses 25%
  @media (min-width: 768px) {
    width: 25%;
  }
`;
export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 75%;
  }
`;
