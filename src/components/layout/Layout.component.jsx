import React from "react";
import { Wrapper } from "./Layout.styles";
import { Container } from "../../ui/components/container/Container.component";
import { Header } from "./header/Header.component";
import { Footer } from "./footer/Footer.component";

export const Layout = ({ children, photo }) => (
  <Wrapper>
    <Container>
      <Header photo={photo} />
      {children}
      <Footer />
    </Container>
  </Wrapper>
);
