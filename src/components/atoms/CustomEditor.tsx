import React from "react";
import styled from "styled-components";
import { Editor as TinymcEditor } from "@tinymce/tinymce-react";
import { font } from "@/styles";
import useEmoji from "@/hooks/useEmoji";
import { EmojiModal } from "@/components/common";

interface IBlobInfo {
  id: () => string;
  name: () => string;
  filename: () => string;
  blob: () => Blob;
  base64: () => string;
  blobUri: () => string;
  uri: () => string | undefined;
}

const CustomEditor = () => {
  const [content, setContent] = React.useState("");
  const { openEmoji, closeEmoji, visible } = useEmoji();

  const imagesUploadHandler = async (blobInfo: IBlobInfo): Promise<string> => {
    return new Promise(() => {
      const file = new FormData();
      file.append("file", blobInfo.blob());
    });
  };

  return (
    <Container>
      {visible && <EmojiModal top="14%" left="54%" onClose={closeEmoji} />}
      <TinymcEditor
        init={{
          language: "ko_KR",
          height: "300px",
          menubar: false,
          content_css: "white",
          plugins: [
            "code",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "media",
            "table",
            "wordcount",
            "codesample",
          ],
          toolbar:
            "undo redo codesample | bold italic | alignleft alignright aligncenter alignjustify | emoticon image media | preview code",
          codesample_global_prismjs: true,
          setup: (tinymceEditor) => {
            tinymceEditor.ui.registry.addButton("emoticon", {
              icon: "emoji",
              onAction: openEmoji,
            });
          },
          relative_urls: false,
          convert_urls: false,
          extended_valid_elements: "img[src|class|alt|e_id|e_idx|e_type]",
          images_upload_handler: imagesUploadHandler,
          init_instance_callback: (e) => {
            const css = document.createElement("style");
            css.innerHTML = StyledCSS;
            e.contentDocument.head.appendChild(css);
          },
        }}
        value={content}
        onEditorChange={(props) => setContent(props)}
      />
    </Container>
  );
};

const StyledCSS = `
  html {
    ${font.p3};
  }

  * {
    border-color: green !important;
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .emoticon {
    width: 100px !important;
    height: 100px !important;
  }

  body {
    padding: 18px !important;
  }
`;

const Container = styled.div`
  position: relative;
`;

export default CustomEditor;
