import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Wrapper } from "./BusinessList.styles";
import { textToLink } from "../../list-task/ListTask.utils";
import { BusinessMessage } from "../business-message/BusinessMessage.component";

export const BusinessList = ({ listTask }) => {
  const { title } = useParams();

  const list = listTask
    .filter((task) => textToLink(task.title) === title)
    .map((task) => task);

  console.log(list);

  return (
    <Wrapper>
      <div>
        {list[0].businessContext.map((item) => (
            <p>{item.author}</p>
        ))}
      </div>

      <div>
        <Routes>
          <Route path="/:id" element={<BusinessMessage />} />
        </Routes>
      </div>
    </Wrapper>
  );
};