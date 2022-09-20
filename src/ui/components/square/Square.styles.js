import styled, { css } from "styled-components";

const statuses = {
  complete: css`
    background-color: ${({theme}) => theme.color.success.light};
    color: ${({theme}) => theme.color.success.dark};
  `,
  active: css `
    background-color: ${({theme}) => theme.color.primary};
    color: #fff;
  `,
  disabled: css `
    background-color: ${({theme}) => theme.color.gray.light};
    color: ${({theme}) => theme.color.gray.dark};
  `
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  border-radius: ${({ theme }) => theme.radius.square};
  ${({ status }) => status && statuses[status]}
`;