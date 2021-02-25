import React from "react";

const ProjectLabel = () => {
  return (
    <div className="flex items-center justify-start mb-5">
      <div className="w-32 text-gray-400 text-xs font-light">Project</div>
      <p className="px-4 py-1 text-yellow-500 text-xs font-bold bg-yellow-100 rounded-full cursor-pointer uppercase">
        Developement
      </p>
    </div>
  );
};

export default ProjectLabel;
