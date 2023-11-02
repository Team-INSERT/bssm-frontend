import styled from "styled-components";
import { color, flex, font } from "@/styles";
import useWindow from "@/hooks/useWindow";

const navigationTypes = [
  {
    name: "학교",
    isDisplayNoneAtResponsive: false,
  },
  {
    name: "기숙사",
    isDisplayNoneAtResponsive: false,
  },
  {
    name: "커뮤니티",
    isDisplayNoneAtResponsive: false,
  },
  {
    name: "기타 목록",
    isDisplayNoneAtResponsive: true,
  },
];

const Navigation = () => {
  const { isWindow } = useWindow();
  return (
    <NavigationList>
      {isWindow &&
        navigationTypes.map((navigation) => {
          if (navigation.isDisplayNoneAtResponsive && window.innerWidth <= 768)
            return;
          return (
            <NavigationListItem key={navigation.name}>
              {navigation.name}
            </NavigationListItem>
          );
        })}
    </NavigationList>
  );
};

const NavigationList = styled.ul`
  width: 100%;
  display: flex;
  gap: 4%;
`;

const NavigationListItem = styled.li`
  font-size: ${font.H5};
  color: ${color.black};
  ${flex.CENTER};
  cursor: pointer;
  width: 100px;

  &:nth-child(1),
  &:nth-child(2) {
    @media screen and (min-width: 420px) {
      &:after {
        content: " 생활";
      }
    }
  }
`;

export default Navigation;
