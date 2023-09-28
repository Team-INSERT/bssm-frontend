import React from "react";

const useTextarea = (defaultContent?: string) => {
  const [content, setContent] = React.useState(defaultContent || "");
  const [textareaHeight, setTextareaHeight] = React.useState({
    row: 2,
    lineBreak: [] as Array<boolean>,
  });

  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, clientHeight, value } = e.target;

    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }
    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const onKeyEnter = (
    e: KeyboardEvent & React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (e.code === "Enter") {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
      }));
    }
  };

  return {
    content,
    setContent,
    row: textareaHeight.row,
    handleResizeTextAreaOnInput: onInput,
    handleResizeTextareaKeyEnter:
      onKeyEnter as unknown as React.KeyboardEventHandler<HTMLTextAreaElement>,
  };
};

export default useTextarea;
