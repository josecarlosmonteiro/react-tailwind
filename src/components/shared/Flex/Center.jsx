import React from "react";

export default function Center({ children, variant }) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      {children}
    </div>
  );
}
