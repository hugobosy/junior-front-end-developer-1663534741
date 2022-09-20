import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: ${({ theme }) => theme.font.size.m};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.font.size.l};
  `,
  large: css`
    font-size: ${({ theme }) => theme.font.size.xl};
  `,
};

export const HeaderCaption = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xl};
  color: ${({ theme }) => theme.color.dark};
  line-height: ${({ theme }) => theme.font.lineHeight.xxl};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  ${({ size }) => size && sizes[size]};
  color: ${({ color }) => color};

  ${({ isUppercase }) =>
    isUppercase &&
    css`
      text-transform: uppercase;
    `}
`;
