import React from "react";
import { Home } from "./pages/Home";
import { createContext, useState } from "react";
import { taskList } from "./data/task-list";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(taskList);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Home />
    </DataContext.Provider>
  );
}

export default App;
