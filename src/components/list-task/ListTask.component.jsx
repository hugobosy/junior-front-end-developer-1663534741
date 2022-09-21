import React, { useContext } from "react";
import { HeaderText } from "../../ui/components/header-text/HeaderText.component";
import {
  HeaderWrapper,
  Line,
  NavigationLink,
  Wrapper,
} from "./ListTask.styles";
import { textToLink } from "./ListTask.utils";
import { Square } from "../../ui/components/square/Square.component";
import { DataContext } from "../../App";

export const ListTasks = () => {
  const { data } = useContext(DataContext);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderText caption="Your Tasks" isUppercase size="small" />
      </HeaderWrapper>

      <Line />
      <div>
        <ul>
          {data.map(({ status, title }) => (
            <li key={title}>
              <Square status={status} />
              {status !== "disabled" ? (
                <NavigationLink
                  to={`/${textToLink(title)}/1`}
                  status={status}
                >
                  {title}
                </NavigationLink>
              ) : (
                <NavigationLink status={status}>
                  {title}
                </NavigationLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};
