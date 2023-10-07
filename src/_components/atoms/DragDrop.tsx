import Image from "next/image";
import { color } from "@/_styles";
import React from "react";
import styled, { css } from "styled-components";
import { Column, Row } from "../Flex";

interface DragDropFunctionPropsType {
  handler: (file: File | undefined) => void;
  previewImage?: string;
  width?: string;
  height?: string;
  isDontNeedPreview?: boolean;
  isDontNeedChangeText?: boolean;
}

const DragDrop = ({
  width,
  height,
  handler,
  previewImage,
  isDontNeedPreview,
  isDontNeedChangeText,
}: DragDropFunctionPropsType) => {
  const [isDragging, setIsDragging] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File>();

  const dragRef = React.useRef<HTMLLabelElement | null>(null);

  const onChangeFiles = React.useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLInputElement>,
    ) => {
      let selectFiles: File[] = [];

      if (e.type === "drop") {
        const dragEvent = e as React.DragEvent<HTMLInputElement>;
        const fileList = dragEvent.dataTransfer.files;
        selectFiles = fileList ? Array.from(fileList) : []; // FileList가 null이면 빈 배열 할당
      } else {
        const changeEvent = e as React.ChangeEvent<HTMLInputElement>;
        const fileList = changeEvent.target.files;
        selectFiles = fileList ? Array.from(fileList) : []; // FileList가 null이면 빈 배열 할당
      }

      const [currentFile] = selectFiles;
      handler(currentFile);
      setFile(currentFile);
    },
    // eslint-disable-next-line
    [],
  );

  const handleDragIn = React.useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = React.useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = React.useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) setIsDragging(true);
  }, []);

  const handleDrop = React.useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e as unknown as React.DragEvent<HTMLInputElement>);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = React.useCallback(() => {
    if (dragRef.current) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = React.useCallback(() => {
    if (dragRef.current) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  React.useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <Row>
      <Column gap="6px">
        <NoneDisplayInput
          onChange={onChangeFiles}
          type="file"
          id="fileUpload"
          multiple
        />
        <DragDropButton
          width={width}
          height={height}
          isDragging={isDragging}
          htmlFor="fileUpload"
          ref={dragRef}
        >
          <DragDropTitle>
            {file && !isDontNeedChangeText
              ? file.name
              : "드래그하여 파일 업로드"}
          </DragDropTitle>
        </DragDropButton>
      </Column>
      {file && !isDontNeedPreview && previewImage && (
        <StyledImage
          width={999}
          height={999}
          src={previewImage}
          alt="미리보기"
        />
      )}
    </Row>
  );
};

const NoneDisplayInput = styled.input`
  display: none;
`;

const DragDropTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const StyledImage = styled(Image)`
  border-radius: 6px;
  width: 28vw;
  height: 30vh;
  padding: 6px;
`;

const DragDropButton = styled.label<{
  width?: string;
  height?: string;
  isDragging: boolean;
}>`
  width: ${({ width }) => width || "24vw"};
  height: ${({ height }) => height || "30vh"};
  border: 2px solid ${color.container};
  ${({ isDragging }) =>
    isDragging
      ? css`
          background-color: ${color.primary_blue};
          color: ${color.white};
        `
      : css`
          background-color: ${color.white};
          color: ${color.black};
        `};
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.12s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DragDrop;
