import React from "react";
import SampleAvatar from "../../assets/images/sample-avatar.png";

const AssigneeTask = () => {
  return (
    <div className="flex items-center justify-start mb-1">
      <div className="w-32 text-gray-400 text-xs font-light">Assignee</div>
      <div className="flex items-center justify-start -ml-2 px-2 py-1 h-12 text-gray-500 text-sm hover:bg-gray-100 rounded-md cursor-pointer">
        <img
          src={SampleAvatar}
          alt=""
          className="mr-2 border border-gray-200 rounded-full"
        />
        Mateusz Motyka
      </div>
    </div>
  );
};

export default AssigneeTask;
