import React from "react";
import { infoFooter } from "./Footer.utils";
import { Paragraph } from "../../../ui/components/paragraph/Paragraph.component";
import { InfoVersion, Links, Wrapper } from "./Footer.styles";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => (
  <Wrapper>
    <Links>
      <NavLink to="#">{infoFooter.services}</NavLink>
      <NavLink to="#">{infoFooter.privacyPolicy}</NavLink>
      <NavLink to="#">{infoFooter.copyright}</NavLink>
    </Links>
    <InfoVersion>
      <Paragraph caption={infoFooter.version} />
      <Paragraph caption={infoFooter.lastUpdate} />
    </InfoVersion>
  </Wrapper>
);
