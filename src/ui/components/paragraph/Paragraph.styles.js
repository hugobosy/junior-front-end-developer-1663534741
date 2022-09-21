import styled, { css } from "styled-components";

export const ParagraphText = styled.p`
  color: ${({ theme }) => theme.color.light};
    ${({ isNew }) =>
      isNew &&
      css`
        color: ${({ theme }) => theme.color.primary};
      `};
`;