import React from "react";
import MDViewer from "@uiw/react-markdown-preview";

interface MDViewerPropsType {
  content?: string;
}

const CustomViewer = ({ content }: MDViewerPropsType) => {
  return (
    <MDViewer
      source={content}
      wrapperElement={{
        "data-color-mode": "light",
      }}
    />
  );
};

export default CustomViewer;
