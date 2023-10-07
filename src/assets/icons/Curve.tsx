import React from "react";

const Curve = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.03516"
        y="2.76147"
        width="36.459"
        height="37.7018"
        fill="white"
      />
      <mask
        id="mask0_1173_192"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="45"
        height="45"
      >
        <path
          d="M42.0527 2.76147H2.05273V42.7615H42.0527V2.76147Z"
          fill="white"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M36.0527 8.76147C30.0527 8.76147 25.0527 12.7615 22.0527 22.7615C19.0527 32.7615 14.0527 36.7615 8.05273 36.7615"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_1173_192)">
        <path
          d="M-1.94727 -1.23853H46.0527V46.7615H-1.94727V-1.23853Z"
          fill="#73AEE3"
        />
      </g>
    </svg>
  );
};

export default Curve;
