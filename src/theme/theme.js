import { ReactComponent as CompleteIcon } from "../assets/icons/ico-complete.svg";
import { ReactComponent as EditIcon } from "../assets/icons/ico-edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/ico-delete.svg";

export const ButtonType = {
  transparent:
    "bg-transparent text-gray-400 font-bold text-center hover:bg-gray-300 hover:text-gray-500 hover:bg-opacity-20 border border-solid border-gray-300",
  green: "bg-green-200 hover:bg-green-300 text-black text-center",
  greenTransparent:
    "bg-transparent hover:bg-green-300 hover:bg-opacity-20 hover:text-green-700 border border-green-300 text-black text-center",
  redTransparent:
    "bg-transparent hover:bg-red-300 hover:bg-opacity-20 hover:text-red-700 border border-red-300 text-red-500 text-center",
  yellow: "bg-yellow-100 hover:bg-yellow-200 text-yellow-600 text-center",
  gray: "bg-gray-200 hover:bg-gray-300 text-gray-600 text-center",
};

export const ButtonSize = {
  xxs: "py-1 px-4 text-xs",
  xs: "py-2 px-4 text-xs",
  sm: "py-3 px-10 text-base",
};

export const ButtonRounded = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const IconType = {
  complete: <CompleteIcon className="mr-2 w-3 h-3" />,
  edit: <EditIcon className="mr-2 w-3 h-3" />,
  delete: <DeleteIcon className="mr-2 w-3 h-3" />,
};
