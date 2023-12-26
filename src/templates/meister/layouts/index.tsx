import flex from "@/styles/flex";
import { Column, Row } from "@/components/Flex";
import { theme, font } from "@/styles";
import Loading from "@/components/atoms/Loading";
import React from "react";
import styled, { css } from "styled-components";
import MeisterProfileBox from "./MeisterProfileBox";
import YearlyMeisterScore from "./YearlyMeisterScore";
import Distribution from "./Distribution";
import Ranking from "./Ranking";
import CircularProgressBox from "./CircularProgressBox";
import PointHTMLContent from "./PointHTMLContent";
import ScoreHTMLContent from "./ScoreHTMLContent";
import { meisterListData } from "../assets/data";
import { useMeister, useMeisterHTML } from "../hooks";

const MeisterPage = () => {
  const {
    viewType,
    isLoading,
    isSuccess,
    meisterDetail,
    studentInfo,
    studentNum,
    setViewType,
    handleStudentNumChange,
    handleStudentSearchClick,
  } = useMeister();
  const { scoreParser, pointParser, getBasicJobSkills } = useMeisterHTML();

  return (
    <Layout>
      <StyledTitle>조회 형식</StyledTitle>
      <CategoryBox>
        <StyledCategory
          selected={viewType === "분석"}
          onClick={() => setViewType("분석")}
        >
          분석
        </StyledCategory>
        <StyledCategory
          selected={viewType === "랭킹"}
          onClick={() => setViewType("랭킹")}
        >
          랭킹
        </StyledCategory>
      </CategoryBox>
      {viewType === "분석" && (
        <InputWrap>
          <Column gap="4px">
            <InputTitle>학번 입력</InputTitle>
            <Row
              as="form"
              alignItems="center"
              gap="12px"
              onSubmit={(e) => e.preventDefault()}
            >
              <StyledInput
                value={studentNum}
                onChange={handleStudentNumChange}
              />
              <StyledButton onClick={handleStudentSearchClick} type="submit">
                조회
              </StyledButton>
            </Row>
          </Column>
        </InputWrap>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isSuccess && viewType === "분석" && (
            <>
              <MeisterProfileBox
                meister={meisterDetail.meister}
                name={studentInfo}
              />
              <StatusCardBox>
                {meisterListData.map(({ name, color: status }) => {
                  const rate =
                    (meisterDetail.meister[name] / meisterDetail.max[name]) *
                    100;
                  return (
                    <CircularProgressBox
                      key={name}
                      chapter={name}
                      score={`${meisterDetail.meister[name]}점`}
                      statusColor={status}
                      value={rate}
                      text={`${Math.round(rate)}%`}
                    />
                  );
                })}
              </StatusCardBox>
              <Row width="100%" justifyContent="space-between">
                <YearlyMeisterScore {...meisterDetail} />
                <Distribution {...meisterDetail} />
              </Row>
              <StyledTitle>💼 직업 기초 능력</StyledTitle>
              <StatusCardBox>
                {getBasicJobSkills(meisterDetail.meister.scoreHtmlContent).map(
                  (item) => (
                    <CircularProgressBox
                      key={item.title}
                      chapter={item.title}
                      score={`${item.value}등급`}
                      statusColor={item.status}
                      value={[100, 75, 50, 25][item.value - 1]}
                      text={`${["A", "B", "C", "D"][item.value - 1]}`}
                    />
                  ),
                )}
              </StatusCardBox>
              <ScoreHTMLContent
                scoreHTML={scoreParser(meisterDetail.meister.scoreHtmlContent)}
              />
              <PointHTMLContent
                pointHTML={pointParser(meisterDetail.meister.pointHtmlContent)}
              />
            </>
          )}
          {viewType === "랭킹" && <Ranking />}
        </>
      )}
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_VERTICAL};
  gap: 16px;
`;

const StatusCardBox = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const StyledTitle = styled.span`
  ${font.p2};
  font-weight: 500;
  margin-right: auto;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InputTitle = styled.span`
  ${font.p3};
`;

const StyledInput = styled.input`
  width: 100px;
  padding: 8px 12px;
  box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.05);
  background-color: ${theme.white};
`;

const StyledButton = styled.button`
  width: fit-content;
  padding: 6px 14px;
  background-color: ${theme.primary_blue};
  border-radius: 6px;
  color: white;
`;

const StyledCategory = styled.label<{ selected: boolean }>`
  border: none;
  padding: 6px 16px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  ${font.btn3};
  ${({ selected }) =>
    selected
      ? css`
          background-color: ${theme.primary_blue};
          color: ${theme.white};
        `
      : css`
          background-color: ${theme.white};
          color: ${theme.gray};

          &:hover {
            background-color: ${theme.on_tertiary};
          }
        `}
`;

export default MeisterPage;
