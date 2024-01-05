import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { theme, font } from "@/styles";
import { useUser } from "@/@user/hooks";
import { useRouter } from "next/navigation";

interface MeisterProfileBoxProps {
  meister: {
    score: number;
    positivePoint: number;
    negativePoint: number;
  };
  name: string;
}

const MeisterProfileBox = ({ meister, name }: MeisterProfileBoxProps) => {
  const { user, isLoggedIn } = useUser();
  const router = useRouter();

  return (
    <Container>
      {isLoggedIn && (
        <>
          <Column>
            <Row alignItems="center" gap="5px">
              <Name>{name}</Name>
            </Row>
            <MeisterPoint>
              마이스터역량인증제 점수 ㆍ {meister.score}점
            </MeisterPoint>
            <Row alignItems="center" gap="8px">
              <CreditPoint>상점 ㆍ {meister.positivePoint}점</CreditPoint>
              <Separator />
              <DemeritPoint>벌점 ㆍ {meister.negativePoint}점</DemeritPoint>
            </Row>
          </Column>
          <MyPageButton onClick={() => router.push(user.profile_url)}>
            내 정보
          </MyPageButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 14px 24px;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  gap: 18px;
`;

const InformationText = styled.span`
  ${font.H6};
  color: ${theme.black};
`;

const Name = styled(InformationText)``;

const RewardPointText = styled.span`
  ${font.p3};
  line-height: 130%;
  color: ${theme.gray};
`;

const MeisterPoint = styled(RewardPointText)``;

const CreditPoint = styled(RewardPointText)``;

const Separator = styled.div`
  width: 1.5px;
  background-color: ${theme.on_tertiary};
  height: 12px;
`;

const DemeritPoint = styled(RewardPointText)``;

const MyPageButton = styled.div`
  padding: 4px 10px;
  border-radius: 4px;
  margin-left: auto;
  background-color: ${theme.primary_blue};
  ${font.btn3};
  color: ${theme.white};
  cursor: pointer;
`;

export default MeisterProfileBox;
