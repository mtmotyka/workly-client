import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IoCalendarOutline } from "react-icons/io5";

const DueDate = ({ sendDate }) => {
  const [dueDate, setDueDate] = useState(new Date());

  const setNewTaskDate = (dueDate) => {
    setDueDate(dueDate);
    sendDate(dueDate);
  };

  return (
    <div className="flex items-center justify-start mb-3">
      <div className="w-32 text-secondary text-xs font-light">Due date</div>
      <div className="flex items-center justify-start -ml-2 px-2 py-1 h-12 text-secondary text-sm hover:bg-accent rounded-md">
        <IoCalendarOutline size="1.6em" className="mr-2" />
        <DatePicker
          selected={dueDate}
          onChange={setNewTaskDate}
          dateFormat="dd/MM/yyyy"
          className="bg-primary cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DueDate;
