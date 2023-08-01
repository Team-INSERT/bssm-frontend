import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Row, Column } from "@/components/Flex";
import { color, font } from "@/styles";
import { Time } from "@/assets/icons";

const LostFoundTitle = () => {
  return (
    <Column>
      <Title>빈폴 남성용 카드지갑</Title>
      <ProfileBox href="/" target="_blank">
        <Profile
          src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=256&q=75"
          alt="profile"
          width={46}
          height={46}
        />
        <Column justifyContent="center">
          <Author>우빈우빈</Author>
          <Row gap="4px" alignItems="center">
            <Time width={12} height={12} />
            <Date>2023.07.22.</Date>
          </Row>
        </Column>
      </ProfileBox>
    </Column>
  );
};

const Title = styled.h1`
  ${font.H3};
  padding-bottom: 10px;
`;

const ProfileBox = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
`;

const Profile = styled(Image)`
  border: 2px solid ${color.on_tertiary};
  border-radius: 50%;
  padding: 1px;
`;

const Author = styled.h2`
  ${font.context};
`;

const Date = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default LostFoundTitle;
