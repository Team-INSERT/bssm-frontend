import { Column } from "@/_components/Flex";
import { CustomViewer } from "@/_components/atoms";
import useDate from "@/_hooks/useDate";
import { font } from "@/_styles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface ISectionBoxProps {
  title: string;
  content?: string;
  startTime?: string;
  endTime?: string;
  isProjectDate?: boolean;
  isContent?: boolean;
  isUrl?: boolean;
  isDefault?: boolean;
  isImage?: boolean;
}

const SectionBox = ({
  title,
  content,
  startTime,
  endTime,
  isProjectDate,
  isContent,
  isUrl,
  isDefault,
  isImage,
}: ISectionBoxProps) => {
  const { formatDate } = useDate();
  return (
    <Column gap="4px">
      {isUrl && content ? (
        <StyledAnchor href={content} target="_blank">
          {title}
        </StyledAnchor>
      ) : (
        <StyledTitle>{title}</StyledTitle>
      )}
      {isProjectDate && (
        <StyledDateBox>
          <StyledSpan>{formatDate(startTime, { summary: true })}</StyledSpan>
          <StyledSpan> ~ </StyledSpan>
          <StyledSpan>{formatDate(endTime, { summary: true })}</StyledSpan>
        </StyledDateBox>
      )}
      {isContent && (
        <StyledViewerBox>
          <CustomViewer content={content} />
        </StyledViewerBox>
      )}
      {isDefault && <StyledContent>{content}</StyledContent>}
      {isImage && content && (
        <StyledImage
          width={999}
          height={999}
          src={content}
          alt="분실물 이미지"
        />
      )}
    </Column>
  );
};

const StyledTitle = styled.h1`
  ${font.H6};
`;

const StyledViewerBox = styled.div`
  margin-left: 12px;
`;

const StyledDateBox = styled(StyledViewerBox)``;

const StyledContent = styled.div`
  ${font.p3};
  margin-left: 12px;
`;

const StyledSpan = styled.span`
  ${font.p3};
`;

const StyledAnchor = styled(Link)`
  ${font.H6};
  text-decoration: underline;
`;

const StyledImage = styled(Image)`
  width: 50%;
  height: auto;
`;

export default SectionBox;
