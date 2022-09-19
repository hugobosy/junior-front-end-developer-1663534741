import React from "react";
import { Wrapper } from "./BusinessContext.styles";
import { Line } from "../list-task/ListTask.styles";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import { Route, Routes } from "react-router-dom";
import { BusinessList } from "./business-list/BusinessList.component";
import {BusinessMessage} from "./business-message/BusinessMessage.component";

export const BusinessContext = ({ listTask }) => {
  return (
    <Wrapper>
      <HeaderText caption="Business Context" />
      <Line />
    <div>
        <Routes>
            <Route path="/:title" element={<BusinessList listTask={listTask} />} >
                <Route path="/:title/:id" element={<BusinessMessage />} />
            </Route>
        </Routes>
    </div>
    </Wrapper>
  );
};
