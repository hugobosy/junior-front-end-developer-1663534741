import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 23px 26px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radius.rad12};
  box-shadow: ${({ theme }) => theme.shadow.bottom};
`;

export const Line = styled.hr `
  height: 1px;
  margin: 23px -26px 26px;
  border: none;
  background-color: ${({theme}) => theme.color.gray.light};
`