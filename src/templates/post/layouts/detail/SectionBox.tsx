import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Column } from "@/components/Flex";
import { font } from "@/styles";
import { ContentViewer } from "@/components/common";
import { PostSectionBoxProps } from "../../types/@props";

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
}: PostSectionBoxProps) => {
  return (
    <Column gap="4px">
      {isUrl && content ? (
        <StyledAnchor href={content} target="_blank">
          {title}
        </StyledAnchor>
      ) : (
        <StyledTitleText>{title}</StyledTitleText>
      )}
      {isProjectDate && (
        <StyledViewerBox>
          <StyledSpan>{dayjs(startTime).format("YYYY. MM. DD.")}</StyledSpan>
          <StyledSpan> ~ </StyledSpan>
          <StyledSpan>{dayjs(endTime).format("YYYY. MM. DD.")}</StyledSpan>
        </StyledViewerBox>
      )}
      {isContent && (
        <StyledViewerBox>
          <ContentViewer content={content} />
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

const StyledTitleText = styled.h1`
  ${font.H6};
`;

const StyledViewerBox = styled.div`
  margin-left: 12px;
`;

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

const StyledImage = styled.img`
  width: 50%;
  height: auto;
`;

export default SectionBox;
