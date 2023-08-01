import React from "react";
import { Kissing } from "./index";

const Emoji = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseOverEmoji = () => {
    setIsHover(true);
  };

  const handleMouseLeaveEmoji = () => {
    setIsHover(false);
  };

  return (
    <Kissing
      {...props}
      isHover={isHover}
      onMouseOver={handleMouseOverEmoji}
      onMouseLeave={handleMouseLeaveEmoji}
    />
  );
};

export default Emoji;
