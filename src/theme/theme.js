import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { IoMdAddCircleOutline } from "react-icons/io";

export const ButtonType = {
  transparent:
    "bg-transparent text-gray-400 font-light text-center hover:bg-gray-300 hover:text-gray-500 hover:bg-opacity-20 border border-solid border-gray-300",
  green: "bg-green-500 hover:bg-green-600 font-light text-white text-center",
  greenTransparent:
    "bg-transparent hover:bg-green-300 hover:bg-opacity-20 hover:text-green-700 border border-green-300 font-light text-center",
  redTransparent:
    "bg-transparent hover:bg-red-300 hover:bg-opacity-20 hover:text-red-700 border border-red-300 text-red-500 text-center",
  yellow: "bg-yellow-100 hover:bg-yellow-200 text-yellow-600 text-center",
  gray: "bg-gray-200 hover:bg-gray-300 text-gray-600 text-center",
};

export const ButtonSize = {
  xxs: "py-1 px-4 text-xs",
  xs: "py-2 px-5 text-xs",
  sm: "py-2 px-7 text-sm",
  md: "py-3 px-12 text-md",
};

export const ButtonRounded = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const ButtonShadow = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
};

export const IconType = {
  complete: <FcCheckmark className="mr-2" size="1.2em" />,
  edit: <BsPencil className="mr-2" size="1.3em" />,
  delete: <AiOutlineDelete className="mr-2" size="1.3em" />,
  add: <IoMdAddCircleOutline className="mr-2" size="1.3em" />,
};
