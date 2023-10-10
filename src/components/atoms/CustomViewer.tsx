import React from "react";
import MDViewer from "@uiw/react-markdown-preview";
import rehypeSanitize from "rehype-sanitize";

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
      rehypePlugins={[rehypeSanitize]}
    />
  );
};

export default CustomViewer;
