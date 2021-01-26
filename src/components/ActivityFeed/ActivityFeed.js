import React from "react";

import "./activity-feed.scss";

import WhiteContainer from "../WhiteContainer/WhiteContainer";
import { ReactComponent as TaskCompleteRounded } from "../../assets/icons/ico-task-complete-rounded.svg";
import { ReactComponent as MessageRounded } from "../../assets/icons/ico-message-rounded.svg";
import { ReactComponent as UploadRounded } from "../../assets/icons/ico-upload-rounded.svg";
import { ReactComponent as EditRounded } from "../../assets/icons/ico-edit-rounded.svg";
import UploadedPhoto from "../../assets/images/example-uploaded-photo.png";

const ActivityFeed = () => {
  return (
    <WhiteContainer title="Activity">
      <div className="activity-feed">
        <div className="single-day">
          <p className="single-day__day">Today</p>
          <div className="timeline-container">
            <div className="single-activity">
              <div className="single-activity__action-wrapper action-wrapper">
                <div className="action-wrapper__icon">
                  <TaskCompleteRounded />
                </div>
                <p className="action-wrapper__action">
                  <strong>Darika Samak</strong> mark as done{" "}
                  <strong>Listing on Product Hunt</strong>
                </p>
              </div>
              <div className="single-activity__time">8:40 PM</div>
            </div>
            <div className="single-activity">
              <div className="single-activity__action-wrapper action-wrapper">
                <div className="action-wrapper__icon">
                  <MessageRounded />
                </div>
                <p className="action-wrapper__action">
                  <strong>Emilee Simchenko </strong> commented on{" "}
                  <strong>
                    Account for teams and personal in bottom style
                  </strong>
                </p>
              </div>
              <div className="single-activity__time">7:43 PM</div>
            </div>
            <div className="single-activity">
              <div className="single-activity__action-wrapper action-wrapper">
                <div className="action-wrapper__icon">
                  <UploadRounded />
                </div>
                <p className="action-wrapper__action">
                  <strong>Darika Samak</strong> uploaded 4 files on{" "}
                  <strong>
                    An option to search in current projects or in all projects
                  </strong>
                </p>
              </div>
              <div className="single-activity__time">6:02 PM</div>
              <div className="single-activity__uploads-container uploads-container">
                {Array(4)
                  .fill(null)
                  .map((index) => (
                    <div className="uploads-container__single-item">
                      <img
                        src={UploadedPhoto}
                        alt=""
                        key={index}
                        className="img-fluid"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="single-day">
          <p className="single-day__day">Yesterday</p>
          <div className="timeline-container">
            <div className="single-activity">
              <div className="single-activity__action-wrapper action-wrapper">
                <div className="action-wrapper__icon">
                  <UploadRounded />
                </div>
                <p className="action-wrapper__action">
                  <strong>Darika Samak</strong> uploaded 4 files on{" "}
                  <strong>
                    An option to search in current projects or in all projects
                  </strong>
                </p>
              </div>
              <div className="single-activity__time">6:02 PM</div>
              <div className="single-activity__uploads-container uploads-container">
                {Array(4)
                  .fill(null)
                  .map((index) => (
                    <div className="uploads-container__single-item">
                      <img
                        src={UploadedPhoto}
                        alt=""
                        key={index}
                        className="img-fluid"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="single-activity">
              <div className="single-activity__action-wrapper action-wrapper">
                <div className="action-wrapper__icon">
                  <TaskCompleteRounded />
                </div>
                <p className="action-wrapper__action">
                  <strong>Darika Samak</strong> mark as done{" "}
                  <strong>
                    Listing on Product Hunt so that we can reach as many
                    potential users
                  </strong>
                </p>
              </div>
              <div className="single-activity__time">7:43 PM</div>
            </div>
            <div className="single-activity">
              <div className="single-activity__action-wrapper action-wrapper">
                <div className="action-wrapper__icon">
                  <EditRounded />
                </div>
                <p className="action-wrapper__action">
                  <strong>Darika Samak</strong> edited{" "}
                  <strong>
                    Listing on Product Hunt so that we can reach as many
                    potential users
                  </strong>
                </p>
              </div>
              <div className="single-activity__time">6:02 PM</div>
            </div>
          </div>
        </div>
      </div>
    </WhiteContainer>
  );
};

export default ActivityFeed;
