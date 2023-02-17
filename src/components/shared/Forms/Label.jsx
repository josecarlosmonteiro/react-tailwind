import React from "react";

export default function Label(props) {
  return (
    <label className="block" {...props}>
      {props.children}
    </label>
  );
}
