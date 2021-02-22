import React from "react";
import Layout from "../../components/Layout/Layout";
import TaskDetails from "../../components/TaskDetails/TaskDetails";
import TasksList from "../../components/TasksList/TasksList";
import WhiteContainer from "../../components/WhiteContainer/WhiteContainer";

const TasksListView = () => {
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-5 items-start max-h-screen">
        <div className="col-span-2">
          <TasksList />
        </div>
        <div className="col-span-3">
          <WhiteContainer title="Task details">
            <TaskDetails />
          </WhiteContainer>
        </div>
      </div>
    </Layout>
  );
};

export default TasksListView;
