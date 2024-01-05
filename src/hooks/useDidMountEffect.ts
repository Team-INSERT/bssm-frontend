import React from "react";

const useDidMountEffect = (func: () => void, deps: React.DependencyList) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
