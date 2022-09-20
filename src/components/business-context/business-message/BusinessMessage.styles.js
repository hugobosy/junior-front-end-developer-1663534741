import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 18px 35px;
`;

export const MessageWrapper = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  align-items: flex-start;
  margin-top: 11px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  font-size: ${({ theme }) => theme.font.size.m};
  line-height: ${({ theme }) => theme.font.lineHeight.l};
  
  p:nth-child(2n) {
    padding-bottom: 30px;
  }
`;
