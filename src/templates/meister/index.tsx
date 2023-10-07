import flex from "@/styles/flex";
import emptyMeister from "@/assets/data/emptyMeister";
import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { Button, Category } from "@/components/atoms";
import { useRouter } from "next/navigation";
import { ROUTER } from "@/constants";
import { useMeisterHTML } from "@/hooks/useMeisterHTML";
import React from "react";
import styled from "styled-components";
import MeisterProfileBox from "./layouts/MeisterProfileBox";
import YearlyMeisterScore from "./layouts/YearlyMeisterScore";
import Distribution from "./layouts/Distribution";
import StatusCard from "./layouts/StatusCard";
import {
  useMeisterDetailQuery,
  useMeisterQuery,
} from "./services/query.service";
import Ranking from "./layouts/Ranking";
import BasicJobSkillCard from "./layouts/BasicJobSkillCard";

interface IMeisterData {
  name: "professionalTech" | "workEthic" | "humanities" | "foreignScore";
  color: string;
}

const meisterList: Array<IMeisterData> = [
  { name: "professionalTech", color: color.primary_mint },
  { name: "workEthic", color: color.primary_red },
  { name: "humanities", color: color.primary_yellow },
  { name: "foreignScore", color: color.primary_blue },
];

const MeisterPage = () => {
  const meisterData = useMeisterQuery();
  const meisterDetail = useMeisterDetailQuery();
  const { scoreParser, pointParser, getBasicJobSkills } = useMeisterHTML();
  const [meister, setMeister] = React.useState(emptyMeister);
  const [checked, setChecked] = React.useState("내 정보");
  const router = useRouter();

  React.useEffect(() => {
    if (meisterData.isSuccess) {
      setMeister(meisterData.data);
    }
  }, [meisterData]);

  return (
    <Layout>
      {meisterData.isSuccess && (
        <Container>
          <StyledTitle>조회 형식</StyledTitle>
          <CategoryBox>
            {["내 정보", "랭킹"].map((title) => (
              <Category
                id={title}
                name="meister"
                label={title}
                checked={checked === title}
                onChange={(e) => setChecked(e.target.id)}
              />
            ))}
          </CategoryBox>
          {checked === "내 정보" && (
            <>
              <MeisterProfileBox meister={meister.meister} />
              <StatusCardBox>
                {meisterList.map(({ name, color: status }) => (
                  <StatusCard
                    key={name}
                    chapter={name}
                    score={meister.meister[name]}
                    maxScore={meister.max[name]}
                    statusColor={status}
                  />
                ))}
              </StatusCardBox>
              <Row width="100%" justifyContent="space-between">
                {meisterData.isSuccess && (
                  <YearlyMeisterScore meisterData={meister} />
                )}
                <Distribution meisterData={meister} />
              </Row>
              <StyledTitle>💼 직업 기초 능력</StyledTitle>
              <StatusCardBox>
                {meisterDetail.isSuccess &&
                  getBasicJobSkills(meisterDetail.data.scoreHtmlContent).map(
                    (item) => (
                      <BasicJobSkillCard
                        chapter={item.title}
                        score={item.value}
                        statusColor={item.status}
                      />
                    ),
                  )}
              </StatusCardBox>
              {meisterDetail.isSuccess && (
                <>
                  <ScoreHTMLContent
                    dangerouslySetInnerHTML={{
                      __html: scoreParser(meisterDetail.data.scoreHtmlContent),
                    }}
                  />
                  <PointHTMLContent
                    dangerouslySetInnerHTML={{
                      __html: pointParser(meisterDetail.data.pointHtmlContent),
                    }}
                  />
                </>
              )}
            </>
          )}
          {checked === "랭킹" && <Ranking />}
        </Container>
      )}
      {meisterData.isError && (
        <Column
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="70vh"
        >
          <Button
            color={color.primary_blue}
            onClick={() =>
              router.push(process.env.NEXT_PUBLIC_OAUTH_URL || ROUTER.HOME)
            }
          >
            로그인하세요
          </Button>
        </Column>
      )}
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.CENTER};
`;

const Container = styled.div`
  width: 76%;
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

const ScoreHTMLContent = styled.div`
  width: 100%;
  white-space: pre-wrap;
  & > div {
    display: none;
  }

  .item-score {
    ${font.p3};
    color: ${color.gray};
  }

  .total-score-item {
    ${font.H6};
  }

  .list-item {
    ${font.p2};
    font-weight: 600;
    padding: 20px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .section-date {
    margin: 0;
    padding: 0;
    text-align: left;
    ${font.p3};
    color: ${color.gray};
    font-weight: 500;
  }

  & > .titleBarA {
    ${font.H5};

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }

  & > table {
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      display: none;
    }
    background-color: ${color.white};
    width: 100%;
    padding: 16px 20px;
    border-radius: 4px;

    tbody {
      tr {
        &:first-child,
        &:last-child {
          display: none;
        }

        td {
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            display: none;
          }
        }
      }
    }
  }
`;

const PointHTMLContent = styled.div`
  width: 100%;
  & > div {
    display: none;
  }

  li {
    width: 100%;
    background-color: ${color.white};

    & > div {
      border: none;
      box-shadow: 0;
    }
  }
`;

export default MeisterPage;
