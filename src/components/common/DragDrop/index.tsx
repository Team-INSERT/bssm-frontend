import Image from "next/image";
import styled, { css } from "styled-components";
import { flex, theme } from "@/styles";
import { Column, Row } from "@/components/Flex";
import { useDragDrop } from "./hooks";

interface DragDropProps {
  handler: (file?: File) => void;
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
}: DragDropProps) => {
  const { handleChangeFiles, isDragging, dragRef, file } = useDragDrop(handler);
  return (
    <Row>
      <Column gap="6px">
        <NoneDisplayInput
          onChange={handleChangeFiles}
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

const StyledImage = styled.img`
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
  ${flex.CENTER};
  width: ${({ width }) => width || "24vw"};
  height: ${({ height }) => height || "30vh"};
  border: 2px solid ${theme.container};
  ${({ isDragging }) =>
    isDragging
      ? css`
          background-color: ${theme.primary_blue};
          color: ${theme.white};
        `
      : css`
          background-color: ${theme.white};
          color: ${theme.black};
        `};
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.12s ease-in;
`;
export default DragDrop;
