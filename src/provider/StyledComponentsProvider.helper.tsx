import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet(),
  );

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    // eslint-disable-next-line
    return <>{styles}</>;
  };

  const StyledComponentsProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as React.ReactElement}
    </StyleSheetManager>
  );

  return [StyledComponentsProvider, styledComponentsFlushEffect] as const;
}
