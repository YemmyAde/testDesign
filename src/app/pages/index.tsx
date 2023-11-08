import React from "react";
import Layout from "../layout";
import Tasks from "../components/tasks";
import TaskAnaysis from "../components/taskAnaysis";
import Charts from "../components/charts";

const Index= () => {
  return (
    <Layout pageName="index">
        <TaskAnaysis />
        <Charts />
        <Tasks />
    </Layout>
  );
};

export default Index;
