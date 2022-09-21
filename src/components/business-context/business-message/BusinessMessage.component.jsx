import React from "react";
import { useParams } from "react-router-dom";
import { HeaderText } from "../../../ui/components/header-text/HeaderText.component";
import {
  Author,
  Button,
  Content, Dot,
  Message,
  MessageWrapper,
  Wrapper,
} from "./BusinessMessage.styles";
import { Avatar } from "../../../ui/components/avatar/Avatar.component";
import { Paragraph } from "../../../ui/components/paragraph/Paragraph.component";
import { textToLink } from "../../list-task/ListTask.utils";

export const BusinessMessage = ({ data, title, setData }) => {
  const { id } = useParams();

  console.log(data);

  const message = data
    .filter((task) => textToLink(task.title) === title)[0]
    .businessContext.filter((item) => item.id === Number(id))
    .map((item) => item);

  const acceptTask = () => {
    setData((current) =>
      current.map((obj) =>
        textToLink(obj.title) === title ? { ...obj, status: "complete" } : obj
      )
    );
  };

  return (
    <Wrapper>
      {message.map((item) => (
        <div key={item.id}>
          <HeaderText caption={item.title} size="large" />
          <MessageWrapper>
            <Avatar photo={item.avatar.props.photo} isMessage />
            <Message>
              <Author>
                <HeaderText caption={item.author} size="medium" />
                <Dot>•</Dot>
                <Paragraph caption={item.created_at} />
              </Author>
              <Content>
                {item.text.split("\n").map((item) => (
                  <Paragraph key={item} caption={item} />
                ))}
              </Content>
            </Message>
          </MessageWrapper>
        </div>
      ))}
      {!data
        .filter((task) => textToLink(task.title) === title)[0]
        .businessContext.filter((item) => item.isNew)
        .map((item) => item).length && (
        <Button
          onClick={() => {
            acceptTask();

          }}
        >
          Done
        </Button>
      )}
    </Wrapper>
  );
};
