import flex from "@/styles/flex";
import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { Category } from "@/components/atoms";
import Loading from "@/components/atoms/Loading";
import { useMeisterHTML } from "@/hooks/useMeisterHTML";
import React from "react";
import styled from "styled-components";
import MeisterProfileBox from "./MeisterProfileBox";
import YearlyMeisterScore from "./YearlyMeisterScore";
import Distribution from "./Distribution";
import Ranking from "./Ranking";
import CircularProgressBox from "./CircularProgressBox";
import PointHTMLContent from "./PointHTMLContent";
import ScoreHTMLContent from "./ScoreHTMLContent";
import { meisterListData } from "../assets/data";
import { useMeister } from "../hooks";

const MeisterPage = () => {
  const [viewType, setViewType] = React.useState("분석");
  const {
    isLoading,
    isSuccess,
    meister,
    meisterDetail,
    studentInfo,
    studentNum,
    handleStudentNumChange,
    handleStudentSearchClick,
  } = useMeister();
  const { scoreParser, pointParser, getBasicJobSkills } = useMeisterHTML();

  return (
    <Layout>
      <Container>
        <StyledTitle>조회 형식</StyledTitle>
        <CategoryBox>
          {["분석", "랭킹"].map((category) => (
            <Category
              id={category}
              name="meister"
              label={category}
              checked={viewType === category}
              onChange={() => setViewType(category)}
            />
          ))}
        </CategoryBox>
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
                      (meister.meister[name] / meister.max[name]) * 100;
                    return (
                      <CircularProgressBox
                        key={name}
                        chapter={name}
                        score={`${meister.meister[name]}점`}
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
                  {getBasicJobSkills(
                    meisterDetail.meister.scoreHtmlContent,
                  ).map((item) => (
                    <CircularProgressBox
                      key={item.title}
                      chapter={item.title}
                      score={`${item.value}등급`}
                      statusColor={item.status}
                      value={[100, 75, 50, 25][item.value - 1]}
                      text={`${["A", "B", "C", "D"][item.value - 1]}`}
                    />
                  ))}
                </StatusCardBox>
                <ScoreHTMLContent
                  scoreHTML={scoreParser(
                    meisterDetail.meister.scoreHtmlContent,
                  )}
                />
                <PointHTMLContent
                  pointHTML={pointParser(
                    meisterDetail.meister.pointHtmlContent,
                  )}
                />
              </>
            )}
            {isSuccess && viewType === "랭킹" && <Ranking />}
          </>
        )}
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.CENTER};
`;

const Container = styled.div`
  width: 100%;
  ${flex.COLUMN_CENTER};
  gap: 12px;
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
  width: 70px;
  padding: 8px 6px;
  box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.05);
  background-color: ${color.white};
`;

const StyledButton = styled.button`
  width: fit-content;
  padding: 6px 14px;
  background-color: ${color.primary_blue};
  border-radius: 6px;
  color: white;
`;

export default MeisterPage;
