import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 15px 20px;
  box-shadow: ${({ theme }) => theme.shadow.bottom};
  border-radius: ${({ theme }) => theme.radius.rad8};
  cursor: pointer;


  ${({ isNew }) =>
    !isNew &&
    css`
      background-color: transparent;
      box-shadow: none;
    `}
`;
export const Label = styled.div`
  display: flex;
  column-gap: 11px;
`;
export const Title = styled.div`
  padding: 6px 0;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weights.medium};

  ${({ isNew }) =>
    isNew &&
    css`
      font-weight: ${({ theme }) => theme.font.weights["extra-bold"]};
    `}
`;
