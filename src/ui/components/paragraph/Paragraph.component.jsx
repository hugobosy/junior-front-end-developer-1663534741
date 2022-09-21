import React from "react";
import { ParagraphText } from "./Paragraph.styles";

export const Paragraph = ({ caption, isNew }) => (
  <ParagraphText isNew={isNew}>{caption}</ParagraphText>
);
