import React from "react";
import { Paragraph } from "../paragraph/Paragraph.component";
import { New } from "./new/New.component";
import { Content, Label, Title, Wrapper } from "./MessageCard.styles";

export const MessageCard = ({
  item: { author, created_at, title: itemTitle, content, isNew } , isActive
}) => {
  return (
    <Wrapper isNew={isNew}>
      <Label>
        {isNew && <New />}
        <Paragraph caption={author} />
        <Paragraph caption={created_at} />
      </Label>
      <Title isNew={isNew}>
        <Paragraph caption={itemTitle} isNew={isNew} />
      </Title>
      <Content>
        <Paragraph caption={content} />
      </Content>
    </Wrapper>
  );
};
