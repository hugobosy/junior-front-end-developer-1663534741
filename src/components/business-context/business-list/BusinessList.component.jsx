import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { NavigationLink, Wrapper } from "./BusinessList.styles";
import { textToLink } from "../../list-task/ListTask.utils";
import { BusinessMessage } from "../business-message/BusinessMessage.component";
import { BusinessListWrapper } from "./BusinessList.styles";
import { MessageCard } from "../../../ui/components/messageCard/MessageCard.component";
import { DataContext } from "../../../App";

export const BusinessList = () => {
  const { data, setData } = useContext(DataContext);
  const { title } = useParams();

  const [businessList, setBusinessList] = useState(
    data.filter((obj) => textToLink(obj.title) === title)[0].businessContext
  );

  useEffect(() => {
    setData((current) =>
      current.map((obj) =>
        textToLink(obj.title) === title
          ? { ...obj, businessContext: businessList }
          : obj
      )
    );
  }, [businessList]);

  return (
    <Wrapper>
      <BusinessListWrapper>
        {data
          .filter((obj) => textToLink(obj.title) === title)[0]
          .businessContext.map((item) => (
            <NavigationLink key={item.id} to={`/${title}/${item.id}`}>
              <MessageCard
                businessList={businessList}
                item={item}
                title={title}
                setBusinessList={setBusinessList}
                id={item.id}
                setData={setData}
              />
            </NavigationLink>
          ))}
      </BusinessListWrapper>

      <Routes>
        <Route
          path="/:id"
          element={
            <BusinessMessage
              data={data}
              title={title}
              setData={setData}
            />
          }
        />
      </Routes>
    </Wrapper>
  );
};
