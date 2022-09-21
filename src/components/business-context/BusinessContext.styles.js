import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 1040px;
  width: 100%;
  padding: 0 4px 4px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radius.rad12};
  box-shadow: ${({ theme }) => theme.shadow.bottom};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-left: 48px;
  height: 66px;
  color: ${({theme}) => theme.color.primary}
`;