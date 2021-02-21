import React from "react";
import Layout from "../../components/Layout/Layout";
import WhiteContainer from "../../components/WhiteContainer/WhiteContainer";
import TasksChart from "../../assets/images/completed-tasks-chart.png";

import "./home.scss";
import "../../assets/styles/modules/_helpers.scss";
import TasksList from "../../components/TasksList/TasksList";
import ActivityFeed from "../../components/ActivityFeed/ActivityFeed";

const HomePage = () => {
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-2 items-start">
        <div className="col-span-1">
          <div className="grid gap-x-4 gap-y-0 grid-cols-2">
            <div className="col-span-2">
              <WhiteContainer title="Completed Tasks">
                <div className="flex items-center justify-between px-4">
                  <p className="mr-9 text-7xl font-bold">372</p>
                  <img
                    src={TasksChart}
                    alt=""
                    className="img-fluid completed-tasks-wrapper__chart"
                  />
                </div>
              </WhiteContainer>
            </div>
            <div className="col-span-1">
              <WhiteContainer title="Working Rate" centered={true}>
                <div className="progress-circle">
                  <svg>
                    <circle cx="60" cy="60" r="60"></circle>
                    <circle
                      cx="60"
                      cy="60"
                      r="60"
                      className="circle-62"
                    ></circle>
                  </svg>
                  <p className="progress-circle__percentage color-green">62%</p>
                </div>
              </WhiteContainer>
            </div>
            <div className="col-span-1">
              <WhiteContainer title="Working Rate" centered={true}>
                <div className="progress-circle">
                  <svg>
                    <circle cx="60" cy="60" r="60"></circle>
                    <circle
                      cx="60"
                      cy="60"
                      r="60"
                      className="circle-47"
                    ></circle>
                  </svg>
                  <p className="progress-circle__percentage color-purple">
                    47%
                  </p>
                </div>
              </WhiteContainer>
            </div>
            <div className="col-span-2">
              <TasksList />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <ActivityFeed />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
