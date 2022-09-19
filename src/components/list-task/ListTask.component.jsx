import React from "react";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import { Line, Wrapper } from "./ListTask.styles";
import { NavLink } from "react-router-dom";
import { textToLink } from "./ListTask.utils";

export const ListTasks = (props) => (
  <Wrapper>
    <HeaderText caption="Your Tasks" />
    <Line />
    <div>
      <ul>
        {props.listTask.map((item) => (
          <li>
            <NavLink to={`/${textToLink(item.title)}`}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </Wrapper>
);
