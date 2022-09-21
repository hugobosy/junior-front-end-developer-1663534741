import React from "react";
import { HeaderCaption } from "./HeaderText.styles";

export const HeaderText = ({ caption, isUppercase, size, color }) => (
  <HeaderCaption isUppercase={isUppercase} size={size} color={color}>
    {caption}
  </HeaderCaption>
);