import React from "react";
import { infoFooter } from "./Footer.utils";
import { Paragraph } from "../../../ui/components/paragraph/Paragraph.component";
import { InfoVersion, Links, Wrapper } from "./Footer.styles";

export const Footer = () => (
  <Wrapper>
    <Links>
      <a href="/terms-of-service">{infoFooter.services}</a>
      <a href="/privacy-policy">{infoFooter.privacyPolicy}</a>
      <a href="/copyright">{infoFooter.copyright}</a>
    </Links>
    <InfoVersion>
      <Paragraph caption={infoFooter.version} />
      <Paragraph caption={infoFooter.lastUpdate} />
    </InfoVersion>
  </Wrapper>
);
