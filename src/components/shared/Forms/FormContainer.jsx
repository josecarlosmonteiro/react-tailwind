import React from "react";

const sizeMap = {
  sm: "w-3/12 px-6 py-4",
  md: "w-6/12 px-8 py-6",
  lg: "w-9/12 px-12 py-8"
};

export default function FormContainer({ size, children }) {
  const style = `${
    size && sizeMap[size]
  } min-w-min bg-gray-200 justify-center items-center rounded-xl shadow-md shadow-gray-400`;

  return <form className={style}>{children}</form>;
}
