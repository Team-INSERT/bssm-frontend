"use client";

import { Provider as JotaiProvider } from "jotai";
import ReactQueryProvider from "./ReactQueryProvider";
import LayoutProvider from "./LayoutProvider";
import StyledComponentsProvider from "./StyledComponentsProvider";

const MainProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        <StyledComponentsProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </StyledComponentsProvider>
      </ReactQueryProvider>
    </JotaiProvider>
  );
};

export default MainProvider;
