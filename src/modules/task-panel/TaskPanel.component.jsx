import React, { useState } from "react";
import { BusinessContext } from "../../components/business-context/BusinessContext.component";
import { ListTasks } from "../../components/list-task/ListTask.component";
import { Wrapper } from "./TaskPanel.styles";
import { taskList } from "../../data/task-list";

export const TaskPanel = () => {
  const [listTask, setListTask] = useState(taskList);

  return (
    <Wrapper>
      <ListTasks listTask={listTask} />
      <BusinessContext listTask={listTask}/>
    </Wrapper>
  );
};
