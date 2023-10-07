import { color } from "@/_styles";
import React from "react";

const HistorySeparator = () => {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 3.58579 0.335786 3.25 0.75 3.25H4.03125V4.75H0.75C0.335787 4.75 0 4.41421 0 4V4Z"
        fill={color.content}
      />
      <path
        d="M10.002 3.25H13.2832C13.6974 3.25 14.0332 3.58579 14.0332 4V4C14.0332 4.41421 13.6974 4.75 13.2832 4.75H10.002V3.25Z"
        fill={color.content}
      />
      <circle cx="7" cy="4" r="3" stroke={color.content} strokeWidth={1.5} />
    </svg>
  );
};

export default HistorySeparator;
