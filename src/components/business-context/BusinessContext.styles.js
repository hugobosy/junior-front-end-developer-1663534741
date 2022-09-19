import styled from "styled-components";

export const Wrapper = styled.div `
  min-width: 1040px;
  width: 100%;
  padding: 23px 26px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radius.rad12};
  box-shadow: ${({ theme }) => theme.shadow.bottom};
  
`