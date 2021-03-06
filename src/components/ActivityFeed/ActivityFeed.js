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
      <div className="activity-feed px-4">
        <div className="single-day">
          <p className="mb-6 text-secondary text-sm font-bold opacity-50 uppercase">
            Today
          </p>
          <div className="timeline-container">
            <div className="timeline-container__single-activity relative pb-6">
              <div className="relative z-1 flex items-start justify-start">
                <div>
                  <TaskCompleteRounded />
                </div>
                <p className="ml-4 mt-1 text-primary opacity-60">
                  <strong className="font-semibold">Darika Samak</strong> mark
                  as done{" "}
                  <strong className="font-semibold">
                    Listing on Product Hunt
                  </strong>
                </p>
              </div>
              <div className="ml-14 text-secondary text-sm font-bold opacity-70">
                8:40 PM
              </div>
            </div>
            <div className="timeline-container__single-activity relative pb-6">
              <div className="relative z-1 flex items-start justify-start">
                <div>
                  <MessageRounded />
                </div>
                <p className="ml-4 mt-1 text-primary opacity-60">
                  <strong className="font-semibold">Emilee Simchenko </strong>{" "}
                  commented on{" "}
                  <strong className="font-semibold">
                    Account for teams and personal in bottom style
                  </strong>
                </p>
              </div>
              <div className="ml-14 text-secondary text-sm font-bold opacity-70">
                7:43 PM
              </div>
            </div>
            <div className="timeline-container__single-activity relative pb-6">
              <div className="relative z-1 flex items-start justify-start">
                <div>
                  <UploadRounded />
                </div>
                <p className="ml-4 mt-1 text-primary opacity-60">
                  <strong className="font-semibold">Darika Samak</strong>{" "}
                  uploaded 4 files on{" "}
                  <strong className="font-semibold">
                    An option to search in current projects or in all projects
                  </strong>
                </p>
              </div>
              <div className="ml-14 text-secondary text-sm font-bold opacity-70">
                6:02 PM
              </div>
              <div className="flex flex-wrap items-start justify-start -mr-2 mb-0 ml-11 mt-0">
                {Array(4)
                  .fill(null)
                  .map((element, index) => (
                    <div className="p-3" key={index}>
                      <img src={UploadedPhoto} alt="" className="img-fluid" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="single-day">
          <p className="mb-6 text-secondary text-sm font-bold opacity-50 uppercase">
            Yesterday
          </p>
          <div className="timeline-container">
            <div className="timeline-container__single-activity relative pb-6">
              <div className="relative z-1 flex items-start justify-start">
                <div>
                  <TaskCompleteRounded />
                </div>
                <p className="ml-4 mt-1 text-primary opacity-60">
                  <strong className="font-semibold">Darika Samak</strong> mark
                  as done{" "}
                  <strong className="font-semibold">
                    Listing on Product Hunt
                  </strong>
                </p>
              </div>
              <div className="ml-14 text-secondary text-sm font-bold opacity-70">
                8:40 PM
              </div>
            </div>
            <div className="timeline-container__single-activity relative pb-6">
              <div className="relative z-1 flex items-start justify-start">
                <div>
                  <MessageRounded />
                </div>
                <p className="ml-4 mt-1 text-primary opacity-60">
                  <strong className="font-semibold">Emilee Simchenko </strong>{" "}
                  commented on{" "}
                  <strong className="font-semibold">
                    Account for teams and personal in bottom style
                  </strong>
                </p>
              </div>
              <div className="ml-14 text-secondary text-sm font-bold opacity-70">
                7:43 PM
              </div>
            </div>
            <div className="timeline-container__single-activity relative pb-6">
              <div className="relative z-1 flex items-start justify-start">
                <div>
                  <EditRounded />
                </div>
                <p className="opacity ml-4 mt-1 text-primary opacity-60">
                  <strong className="font-semibold">Darika Samak</strong> edited{" "}
                  <strong className="font-semibold">
                    Listing on Product Hunt so that we can reach as many
                    potential users
                  </strong>
                </p>
              </div>
              <div className="ml-14 text-secondary text-sm font-bold opacity-70">
                6:02 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </WhiteContainer>
  );
};

export default ActivityFeed;
