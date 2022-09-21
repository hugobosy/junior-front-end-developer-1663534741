import React from "react";
import { Layout } from "../components/layout/Layout.component";
import photo from "../ui/img/foto.png";
import { TaskPanel } from "../modules/task-panel/TaskPanel.component";

export const Home = () => (
  <Layout photo={photo}>
    <TaskPanel />
  </Layout>
);
