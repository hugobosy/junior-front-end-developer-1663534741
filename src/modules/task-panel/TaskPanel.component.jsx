import React from "react";
import { BusinessContext } from "../../components/business-context/BusinessContext.component";
import { ListTasks } from "../../components/list-task/ListTask.component";
import { Wrapper } from "./TaskPanel.styles";


export const TaskPanel = () => {

  return (
    <Wrapper>
      <ListTasks  />
      <BusinessContext  />
    </Wrapper>
  );
};
