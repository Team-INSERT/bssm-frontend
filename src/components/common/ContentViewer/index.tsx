import MDViewer from "@uiw/react-markdown-preview";
import rehypeSanitize from "rehype-sanitize";

interface ContentViewerProps {
  content?: string;
}

const ContentViewer = ({ content }: ContentViewerProps) => {
  return (
    <MDViewer
      source={content}
      wrapperElement={{ "data-color-mode": "light" }}
      rehypePlugins={[rehypeSanitize]}
    />
  );
};

export default ContentViewer;
