import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { MealIcon } from "@/assets/icons";
import HomeHead from "./HomeHead";
import { get식사명ByMealName } from "../../helpers";

interface HomeMealProps {
  content: string;
  cal: string;
  mealName: string;
}

const HomeMeal = ({ mealName, content, cal }: HomeMealProps) => {
  return (
    <Container>
      <HomeHead icon={<MealIcon />} title="오늘의 급식" href="/meal" />
      <MealBody>
        <MealContent
          dangerouslySetInnerHTML={{
            __html:
              content?.split("<br/>").length > 7
                ? `${content.split("<br/>").slice(0, 7).join("<br/>")}...`
                : content,
          }}
        />
        {content && (
          <MealCalorie>
            {get식사명ByMealName(mealName)}, {cal}kcal
          </MealCalorie>
        )}
        {!content && <MealContent>등록된 급식이 없어요.</MealContent>}
      </MealBody>
    </Container>
  );
};

const Container = styled.div`
  width: 46%;
  height: 30vh;
  border-radius: 4px;
  background-color: ${theme.white};
  ${flex.COLUMN_FLEX};
`;

const MealBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 24px;
  ${flex.FLEX};
`;

const MealContent = styled.p`
  ${font.p3};
  white-space: pre;
  font-size: 11px;
  line-height: 180%;
`;

const MealCalorie = styled.span`
  ${font.caption};
  font-size: 10px;
  color: ${theme.gray};
  margin-left: auto;
`;

export default HomeMeal;
