import styled from "styled-components";
import { color, flex, font } from "@/styles";
import Link from "next/link";

const navigations = [
  {
    key: "학교 생활",
    items: [
      { name: "💁🏻‍♂️ 인증제", href: "/meister" },
      { name: "🍱 급식표", href: "/meal" },
      { name: "🕐 시간표", href: "/timetable" },
      { name: "🗓️ 캘린더", href: "/calender" },
    ],
    isDisplayNoneAtResponsive: false,
  },
  {
    key: "기숙사 생활",
    items: [
      { name: "🚪 (미완)", href: "/" },
      { name: "☕️ 베르실 예약", href: "/reserve" },
    ],
    isDisplayNoneAtResponsive: false,
  },
  {
    key: "커뮤니티",
    items: [
      { name: "📝 게시판", href: "/post" },
      { name: "🎋 대나무숲", href: "/bamboo" },
      { name: "📊 랭킹(미완)", href: "/rank" },
    ],
    isDisplayNoneAtResponsive: false,
  },
  {
    key: "기타",
    items: [{ name: "💼 외부 서비스", href: "/applications" }],
    isDisplayNoneAtResponsive: true,
  },
];

const SubNavigation = () => {
  return (
    <SubNavigationList>
      {navigations.map((navigation) => {
        if (navigation.isDisplayNoneAtResponsive && window.innerWidth <= 768)
          return;
        return (
          <SubNavigationListItem key={navigation.key}>
            {navigation.items.map((item) => (
              <SubNavigationListItemLink key={item.href} href={item.href}>
                {item.name}
              </SubNavigationListItemLink>
            ))}
          </SubNavigationListItem>
        );
      })}
    </SubNavigationList>
  );
};

const SubNavigationList = styled.ul`
  width: 100%;
  display: flex;
  gap: 5%;
`;

const SubNavigationListItem = styled.li`
  font-size: ${font.H5};
  color: ${color.black};
  ${flex.COLUMN};
  gap: 20px;
`;

const SubNavigationListItemLink = styled(Link)`
  ${font.p3};
  ${flex.CENTER};
  font-weight: 500;
  width: 90px;
  cursor: pointer;

  @media screen and (max-width: 570px) {
    width: 85px;
  }

  @media screen and (max-width: 490px) {
    width: 80px;
  }
`;

export default SubNavigation;
