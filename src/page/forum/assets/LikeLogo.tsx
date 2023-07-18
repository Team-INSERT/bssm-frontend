import SVGAttribute from "@/types/SVGAttribute";
import React from "react";

const LikeLogo = ({ width, height, pointable }: SVGAttribute) => {
  return (
    <svg
      width={width ?? 15}
      height={height ?? 13}
      style={{
        cursor: pointable ? "pointer" : "",
      }}
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.42676 12.9334L6.41176 12.0094C2.80676 8.74038 0.426758 6.57738 0.426758 3.93838C0.426758 1.77538 2.12076 0.0883789 4.27676 0.0883789C5.49476 0.0883789 6.66376 0.655379 7.42676 1.54438C8.18976 0.655379 9.35876 0.0883789 10.5768 0.0883789C12.7328 0.0883789 14.4268 1.77538 14.4268 3.93838C14.4268 6.57738 12.0468 8.74038 8.44176 12.0094L7.42676 12.9334Z"
        fill="#E54F5A"
      />
    </svg>
  );
};

export default LikeLogo;
