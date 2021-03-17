import React from "react";

const TaskDetails = (props) => {
  return (
    <div className="flex items-start justify-start mb-3">
      <div className="w-32 text-secondary text-xs font-light">Description</div>
      <p className="-mt-1 ml-4 px-2 w-full text-secondary text-sm bg-primary rounded-md outline-none resize-none">
        {props.desc}
      </p>
    </div>
  );
};

export default TaskDetails;
