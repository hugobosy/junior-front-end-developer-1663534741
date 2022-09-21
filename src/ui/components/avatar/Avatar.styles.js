import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: 2px;
  overflow: hidden;

  ${({ isMessage }) =>
    isMessage &&
    css`
      border: 1px solid ${({ theme }) => theme.color.gray.dark};
    `}
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.circle};
  }
`;