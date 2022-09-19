import React from "react";
import { useParams } from "react-router-dom";

export const BusinessMessage = ({list}) => {
  const { id } = useParams();
  console.log(list)
  const message = list[0].businessContext.filter(item => item.id === Number(id)).map(item => item.text)
  console.log(message)

  return <p>{message}</p>;
};