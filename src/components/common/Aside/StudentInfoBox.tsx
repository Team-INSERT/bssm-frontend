import styled from "styled-components";
import { theme, font } from "@/styles";
import { Row, Column } from "@/components/Flex";
import { FallbackImage } from "@/components/atoms";
import flex from "@/styles/flex";
import { defaultProfile } from "@/assets/images";
import { useUser } from "@/@user/hooks";
import { useRouter } from "next/navigation";

const StudentInfoBox = () => {
  const router = useRouter();
  const { user, role, isLogined } = useUser();

  return (
    <Container>
      {isLogined && (
        <FallbackImage
          src={user.profile_image}
          fallbackSrc={defaultProfile}
          alt="프로필 이미지"
          width={46}
          height={46}
          rounded
        />
      )}
      {isLogined && (
        <>
          <Column>
            <UserInfoBox>
              <UserInfoText>{user.grade}학년</UserInfoText>
              <UserInfoText>{user.classNum}반</UserInfoText>
              <UserInfoText>{user.studentNumber}번</UserInfoText>
            </UserInfoBox>
            <Row gap="4px">
              <UserName>{user.name}</UserName>
              <UserType>{role}</UserType>
            </Row>
          </Column>
          <NavigateMyPageButton onClick={() => router.push(user.profile_url)}>
            내 정보
          </NavigateMyPageButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.main`
  ${flex.CENTER};
  width: 100%;
  height: 100%;
  background-color: ${theme.white};
  gap: 8px;
  padding: 4px 22px;
  border-radius: 5px;

  @media screen and (max-width: 1074px) {
    padding: 0px 14px;
  }
`;

const UserInfoBox = styled.div`
  ${flex.FLEX};
  gap: 4px;

  @media screen and (max-width: 1074px) {
    display: none;
  }
`;

const UserInfoText = styled.span`
  ${font.p3};
  color: ${theme.gray};
`;

const UserName = styled.span`
  ${font.H4};
`;

const UserType = styled.span`
  ${font.p3};
  color: ${theme.gray};
  margin-top: auto;

  @media screen and (max-width: 1360px) {
    display: none;
  }
`;

const NavigateMyPageButton = styled.button`
  ${flex.CENTER};
  ${font.btn3};
  padding: 4px 10px;
  border: none;
  background-color: ${theme.primary_blue};
  border-radius: 5px;
  margin-left: auto;
  color: ${theme.white};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default StudentInfoBox;
