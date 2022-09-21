import React from "react";
import { Paragraph } from "../paragraph/Paragraph.component";
import { New } from "./new/New.component";
import { Label, Title, Wrapper } from "./MessageCard.styles";

export const MessageCard = ({ item, setBusinessList, id }) => {
  return (
    <Wrapper
      isNew={item.isNew}
      onClick={() => {
        setBusinessList((current) =>
          current.map((obj) => (obj.id === id ? { ...obj, isNew: false } : obj))
        );
      }}
    >
      <Label>
        {item.isNew && <New />}
        <Paragraph caption={item.author} />
        <span>•</span>
        <Paragraph caption={item.created_at} />
      </Label>
      <Title isNew={item.isNew}>
        <Paragraph caption={item.title} isNew={item.isNew} />
      </Title>
      <Paragraph caption={item.content} />
    </Wrapper>
  );
};
