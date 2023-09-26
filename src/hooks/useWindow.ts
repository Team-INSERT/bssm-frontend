"use client";

import React from "react";

const useWindow = () => {
  const [isWindow, setIsWindow] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") setIsWindow(true);
  }, []);

  return { isWindow };
};

export default useWindow;
