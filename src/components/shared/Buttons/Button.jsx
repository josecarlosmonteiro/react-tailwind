import React from "react";

const btnStyleMap = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  danger:
    "bg-silver-500 hover:bg-red-500 text-red-500 hover:text-neutral-200 border-2 border-red-400",
};

export default function Button({ variant, children }) {
  const style = `w-24 duration-200 rounded-md px-3 py-2 ${
    variant ? btnStyleMap[variant] : ""
  }`;
  return <button className={style}>{children}</button>;
}
