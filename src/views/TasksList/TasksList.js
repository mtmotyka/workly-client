import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import WhiteContainer from "../../components/WhiteContainer/WhiteContainer";
import SingleTaskTile from "../../components/SingleTaskTile/SingleTaskTile";
import axios from "axios";

const TasksList = () => {
  const [taskName, setTaskName] = useState("");
  let token = localStorage.getItem("accessToken");

  const createTask = async (e) => {
    e.preventDefault();
    console.log(token);

    const response = await axios.post(
      "http://workly.mikovsky-cloud.com/api/tasks",
      {
        completed: false,
        description: "asd",
        dueDate: "2022-02-18T22:06:40.384Z",
        name: taskName,
      },
      { headers: { Authorization: token } }
    );
    console.log(response);
  };

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-5 items-start max-h-screen">
        <div className="col-span-2">
          <WhiteContainer title="My tasks" button={true}>
            <form onSubmit={createTask}>
              <input
                type="text"
                id="task"
                name="task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <button type="submit">Wyslij</button>
            </form>
            <SingleTaskTile title="" />
          </WhiteContainer>
        </div>
        <div className="col-span-3">
          <WhiteContainer />
        </div>
      </div>
    </Layout>
  );
};

export default TasksList;
