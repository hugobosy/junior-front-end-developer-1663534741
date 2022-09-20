import React from "react";
import { useParams } from "react-router-dom";
import { HeaderText } from "../../../ui/components/header-text/HeaderText.component";
import {Author, Content, Message, MessageWrapper, Wrapper} from "./BusinessMessage.styles";
import { Avatar } from "../../../ui/components/avatar/Avatar.component";
import {Paragraph} from "../../../ui/components/paragraph/Paragraph.component";

export const BusinessMessage = ({ list }) => {
  const { id } = useParams();
  console.log(list);

  const message = list[0].businessContext
    .filter((item) => item.id === Number(id))
    .map((item) => item);

  return (
    <Wrapper>
      {message.map((item) => (
        <>
          <HeaderText caption={item.title} size="large" />
          <MessageWrapper>
            <Avatar photo={item.avatar.props.photo} isMessage />
            <Message>
              <Author>
                <HeaderText caption={item.author} size="medium" />
                <Paragraph caption={item.created_at} />
              </Author>
                <Content>
                    {item.text.split('\n').map(item => <Paragraph caption={item}/> )}
                </Content>
            </Message>
          </MessageWrapper>
        </>
      ))}
    </Wrapper>
  );
};
