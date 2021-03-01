import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { ReactComponent as IcoCalendar } from "../../assets/icons/ico-calendar.svg";

const DueDate = ({ sendDate }) => {
  const [dueDate, setDueDate] = useState(new Date());

  const setNewTaskDate = (dueDate) => {
    setDueDate(dueDate);
    sendDate(dueDate);
  };

  return (
    <div className="flex items-center justify-start mb-3">
      <div className="w-32 text-gray-400 text-xs font-light">Due date</div>
      <div className="flex items-center justify-start -ml-2 px-2 py-1 h-12 text-gray-500 text-sm hover:bg-gray-100 rounded-md">
        <IcoCalendar className="mr-2" />
        <DatePicker
          selected={dueDate}
          onChange={setNewTaskDate}
          dateFormat="dd/MM/yyyy"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DueDate;
