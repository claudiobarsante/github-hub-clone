import styled, { css } from 'styled-components';
import { RiBookLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--border);
`;

export const Topside = styled.div``;
export const Botside = styled.div``;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookLine)`
  ${iconCSS}
`;
export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
