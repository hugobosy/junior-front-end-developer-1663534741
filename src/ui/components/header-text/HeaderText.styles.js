import styled from "styled-components";

export const HeaderCaption = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xl};
  color: ${({ theme }) => theme.color.dark};
  line-height: ${({ theme }) => theme.font.lineHeight.xxl};
  font-weight: ${({ theme }) => theme.font.weights.bold};
`;