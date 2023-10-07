import Image from "next/image";
import styled from "styled-components";
import { color, font } from "@/_styles";

const ModalListItem = () => {
  return (
    <ListItem>
      <ListItemHead>
        <ListItemImage
          src="https://bssm.kro.kr/resource/board/emoticon/11/3.webp"
          width={16}
          height={16}
          alt="emoji"
        />
        <ListItemTitle>동물티콘</ListItemTitle>
      </ListItemHead>
      <EmojiList>
        {Array.from({ length: 13 }).map((_, i) => (
          <EmojiListItem
            key={i}
            src={`https://bssm.kro.kr/resource/board/emoticon/3/${i}.png`}
            alt="emoji"
            width={50}
            height={50}
          />
        ))}
      </EmojiList>
    </ListItem>
  );
};

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ListItemHead = styled.hgroup`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 3px;
`;

const ListItemTitle = styled.h1`
  ${font.p3};
`;

const ListItemImage = styled(Image)`
  border-radius: 4px;
`;

const EmojiList = styled.div`
  width: 100%;
  flex-wrap: wrap;
`;

const EmojiListItem = styled(Image)`
  cursor: pointer;
  padding: 1.5px 3px;

  &:hover {
    background-color: ${color.on_tertiary};
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }
`;

export default ModalListItem;
