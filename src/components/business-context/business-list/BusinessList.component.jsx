import React from "react";
import {
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { NavigationLink, Wrapper } from "./BusinessList.styles";
import { textToLink } from "../../list-task/ListTask.utils";
import { BusinessMessage } from "../business-message/BusinessMessage.component";
import { BusinessListWrapper } from "./BusinessList.styles";
import { MessageCard } from "../../../ui/components/messageCard/MessageCard.component";

export const BusinessList = ({ listTask }) => {
  const { title } = useParams();

  const list = listTask
    .filter((task) => textToLink(task.title) === title)
    .map((task) => task);

  return (
    <Wrapper>
      <BusinessListWrapper>
        {list[0].businessContext.map((item) => (
          <NavigationLink to={`/${title}/${item.id}`}>
            <MessageCard item={item} title={title} />
          </NavigationLink>
        ))}
      </BusinessListWrapper>

        <Routes>
          <Route path="/:id" element={<BusinessMessage list={list} />} />
        </Routes>
    </Wrapper>
  );
};
