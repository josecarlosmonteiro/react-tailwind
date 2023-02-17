import React from "react";

const variantMap = {
  "f-screen": "h-screen",
  "f-content": "h-full",
};

export default function Flex({ children, variant }) {
  return (
    <div className={`flex ${variant && variantMap[variant]}`}>{children}</div>
  );
}
