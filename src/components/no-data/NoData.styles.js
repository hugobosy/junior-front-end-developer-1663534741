import styled from "styled-components";

export const Wrapper = styled.div `
  position: relative;
  width: 100%;
  height: calc(100vh - 500px);
  background-color: rgba(0,0,0,.1);
`

export const NoDataContentWrapper = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  padding: 20px 40px;
  
`