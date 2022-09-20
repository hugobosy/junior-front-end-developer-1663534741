import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 714px;
  display: flex;
  border-bottom-left-radius: ${({ theme }) => theme.radius.rad12};
`;

export const BusinessListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 12px 8px;
  max-width: 321px;
  width: 100%;
  height: 714px;
  background-color: ${({ theme }) => theme.color.gray.light};
  border-bottom-left-radius: ${({ theme }) => theme.radius.rad12};
`;

export const NavigationLink = styled(NavLink)`
  border-radius: ${({ theme }) => theme.radius.rad8};
  transition: .3s;
  &.active {
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(84, 84, 84, 0.2);
  }
`;
