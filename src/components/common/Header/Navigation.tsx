import Link from "next/link";
import styled from "styled-components";
import { color, flex, font } from "@/styles";
import { navigationList } from "./assets/data";

const Navigation = () => {
  return (
    <NavigationList>
      {navigationList.map(({ id, href, name }) => (
        <NavigationListItem key={id} href={href}>
          {name}
        </NavigationListItem>
      ))}
    </NavigationList>
  );
};

const NavigationList = styled.ul`
  width: 100%;
  ${flex.HORIZONTAL};
  gap: 7%;
`;

const NavigationListItem = styled(Link)`
  font-size: ${font.H6};
  color: ${color.black};
  cursor: pointer;
  white-space: pre-wrap;
`;

export default Navigation;
