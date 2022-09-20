import React from "react";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import { Line, LinkText, NavigationLink, Wrapper } from "./ListTask.styles";
import { NavLink } from "react-router-dom";
import { textToLink } from "./ListTask.utils";
import { Square } from "../../ui/components/square/Square.component";
import { Paragraph } from "../../ui/components/paragraph/Paragraph.component";

export const ListTasks = ({ listTask }) => (
  <Wrapper>
    <HeaderText caption="Your Tasks" />
    <Line />
    <div>
      <ul>
        {listTask.map((item) => (
          <li>
            <Square status={item.status} />
            {item.status !== "disabled" ? (
              <NavigationLink
                to={`/${textToLink(item.title)}`}
                status={item.status}
              >
                {item.title}
              </NavigationLink>
            ) : (
              <NavigationLink status={item.status}>{item.title}</NavigationLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  </Wrapper>
);
