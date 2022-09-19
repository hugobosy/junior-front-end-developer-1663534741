import React from "react";
import { Wrapper } from "./Avatar.styles";

export const Avatar = ({ photo, isMessage }) => (
  <Wrapper isMessage={isMessage}>
    <img src={photo} alt="Avatar" />
  </Wrapper>
);
