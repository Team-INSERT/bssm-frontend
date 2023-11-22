import Link from "next/link";
import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { navigationListData } from "./assets/data";

const Navigation = () => {
  return (
    <NavigationList>
      {navigationListData.map(({ id, href, name }) => (
        <NavigationListItem key={id} href={href}>
          {name}
        </NavigationListItem>
      ))}
    </NavigationList>
  );
};

const NavigationList = styled.ul`
  ${flex.VERTICAL};
  width: 100%;
  gap: 7%;
`;

const NavigationListItem = styled(Link)`
  font-size: ${font.H6};
  font-weight: 600;
  color: ${theme.black};
  cursor: pointer;
  white-space: pre-wrap;
`;

export default Navigation;
