type TokenType = "TOKEN:ACCESS" | "TOKEN:REFRESH";
type SettingType =
  | "SETTING:회당불러올게시글수"
  | "SETTING:헤더에이모티콘표시"
  | "SETTING:헤더네비게이션배열"
  | "SETTING:테마"
  | "SETTING:홈페이지조회형식"
  | "SETTING:시간표조회형식"
  | "SETTING:리다이렉트경로";

export type StorageKeyType = TokenType | SettingType;
