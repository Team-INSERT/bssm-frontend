import SVGAttribute from "@/global/types/SVGAttribute";
import React from "react";

const CommentIcon = ({ width, height, pointable }: SVGAttribute) => {
  return (
    <svg
      width={width ?? 22}
      height={height ?? 21}
      style={{
        cursor: pointable ? "pointer" : "",
      }}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.959 19.5015C12.739 19.5015 14.4791 18.9736 15.9591 17.9847C17.4392 16.9958 18.5927 15.5902 19.2739 13.9456C19.9551 12.3011 20.1333 10.4915 19.7861 8.74566C19.4388 6.99983 18.5816 5.39618 17.3229 4.13751C16.0643 2.87884 14.4606 2.02167 12.7148 1.6744C10.969 1.32713 9.15937 1.50536 7.51483 2.18655C5.8703 2.86774 4.46469 4.02129 3.47576 5.50134C2.48683 6.98138 1.95898 8.72144 1.95898 10.5015C1.95898 11.9895 2.31898 13.3925 2.95898 14.6285L1.95898 19.5015L6.83198 18.5015C8.06798 19.1415 9.47198 19.5015 10.959 19.5015Z"
        stroke="#727272"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommentIcon;
