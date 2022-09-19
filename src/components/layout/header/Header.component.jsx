import React from "react";
import { Avatar } from "../../../ui/components/avatar/Avatar.component";
import { Wrapper } from "./Header.styles";
import { Logo } from "../../../ui/components/logo/Logo.component";
import logo from "../../../ui/img/logo.svg";

export const Header = ({ photo }) => (
  <Wrapper>
    <Logo companyLogo={logo} />
    <Avatar photo={photo} />
  </Wrapper>
);
