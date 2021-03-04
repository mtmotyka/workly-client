import React, { useState } from "react";

import Button from "../Button/Button";

const TaskNameInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [taskName, setTaskName] = useState("");

  return (
    <div className="relative mb-7">
      <input
        type="text"
        id="taskName"
        name="taskName"
        value={props.value}
        onChange={(e) => setTaskName(e.target.value)}
        onFocus={(e) => setIsFocused(true)}
        onBlur={(e) => setIsFocused(false)}
        className="placeholder-gray-300 font-regular px-2 py-2 w-full h-12 text-2xl bg-white border border-gray-100 hover:border-gray-300 focus:border-gray-300 rounded-md outline-none resize-none"
      />
      <Button
        type="button"
        size="xs"
        color="green"
        rounded="md"
        className={`absolute right-5 top-2/4 transform -translate-y-2/4 ${
          isFocused ? "block" : "hidden"
        }`}
      >
        Save
      </Button>
    </div>
  );
};

export default TaskNameInput;
