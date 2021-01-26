import React from "react";
import Layout from "../../components/Layout/Layout";
import WhiteContainer from "../../components/WhiteContainer/WhiteContainer";
import TasksChart from "../../assets/images/completed-tasks-chart.png";

import "./home.scss";
import "../../assets/styles/modules/_helpers.scss";
import TodayTasksList from "../../components/TasksList/TodayTasksList";
import ActivityFeed from "../../components/ActivityFeed/ActivityFeed";

const HomePage = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-12">
              <WhiteContainer title="Completed Tasks">
                <div className="completed-tasks-wrapper">
                  <p className="completed-tasks-wrapper__number">372</p>
                  <img
                    src={TasksChart}
                    alt=""
                    className="img-fluid completed-tasks-wrapper__chart"
                  />
                </div>
              </WhiteContainer>
            </div>
            <div className="col-6">
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
            <div className="col-6">
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
            <div className="col-12">
              <TodayTasksList />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ActivityFeed />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
