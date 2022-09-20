import React from "react";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import {
  HeaderWrapper,
  Line,
  NavigationLink,
  Wrapper,
} from "./ListTask.styles";
import { textToLink } from "./ListTask.utils";
import { Square } from "../../ui/components/square/Square.component";

export const ListTasks = ({ listTask }) => (
  <Wrapper>
    <HeaderWrapper>
      <HeaderText caption="Your Tasks" isUppercase size="small" />
    </HeaderWrapper>

    <Line />
    <div>
      <ul>
        {listTask.map((item) => (
          <li>
            <Square status={item.status} />
            {item.status !== "disabled" ? (
              <NavigationLink
                to={`/${textToLink(item.title)}/1`}
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
