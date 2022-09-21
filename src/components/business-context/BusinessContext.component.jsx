import React from "react";
import { HeaderWrapper, Wrapper } from "./BusinessContext.styles";
import { Line } from "../list-task/ListTask.styles";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import { Route, Routes } from "react-router-dom";
import { BusinessList } from "./business-list/BusinessList.component";
import { BiCompass } from "react-icons/bi";

export const BusinessContext = () => {

  return (
    <Wrapper>
      <HeaderWrapper>
        <BiCompass size={25} />
        <HeaderText
          caption="Business Context"
          isUppercase
          size="small"
          color={({ theme }) => theme.color.primary}
        />
      </HeaderWrapper>
      <Line />
      <div>
        <Routes>
          <Route
            path="/:title/*"
            element={<BusinessList />}
          />
        </Routes>
      </div>
    </Wrapper>
  );
};
