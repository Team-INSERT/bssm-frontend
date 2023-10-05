import { useRef, useEffect } from "react";

export const useDidMountEffect = (
  func: () => void,
  deps: React.DependencyList,
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};
