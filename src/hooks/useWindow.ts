import { useEffect, useState } from "react";

export default function useWindow() {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setIsWindow(true);
  }, []);

  return { isWindow };
}
