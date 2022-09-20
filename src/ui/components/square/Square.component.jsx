import React from "react";
import { getIcon } from "./Square.utils";
import { Wrapper } from "./Square.styles";

export const Square = ({ status }) => (
  <Wrapper status={status}>{getIcon(status)}</Wrapper>
);
