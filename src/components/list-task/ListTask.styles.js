import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const statuses = {
  complete: css`
    font-weight: ${({ theme }) => theme.font.weights.medium};
  `,
  active: css`
    font-weight: ${({ theme }) => theme.font.weights.bold};
  `,
  disabled: css`
    font-weight: ${({ theme }) => theme.font.weights.medium};
    color: ${({ theme }) => theme.color.gray.dark};
    cursor: auto;
  `,
};

export const Wrapper = styled.div`
  width: 100%;
  padding: 23px 26px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radius.rad12};
  box-shadow: ${({ theme }) => theme.shadow.bottom};
  
  li {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;

export const Line = styled.hr`
  height: 1px;
  margin: 23px -26px 26px;
  border: none;
  background-color: ${({ theme }) => theme.color.gray.light};
`;

export const NavigationLink = styled(NavLink)`
  padding: 15px 0;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weights.medium};
  text-transform: capitalize;
  text-decoration: none;
  color: ${({ theme }) => theme.color.dark};
  line-height: ${({ theme }) => theme.font.lineHeight.s};
  ${({ status }) => status && statuses[status]}
`;
