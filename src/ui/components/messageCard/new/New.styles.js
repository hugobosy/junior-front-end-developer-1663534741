import styled from "styled-components";

export const Wrapper = styled.div `
  padding: 3px 7px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.color.primary};
  color: #fff;
  text-transform: uppercase;
`