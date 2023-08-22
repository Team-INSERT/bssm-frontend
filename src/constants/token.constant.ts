export interface IToken {
  [TOKEN: string]: "access_token" | "refresh_token" | "post_render_limit";
}

const TOKEN: IToken = {
  ACCESS: "access_token",
  REFRESH: "refresh_token",
  POST_RENDER_LIMIT: "post_render_limit",
} as const;

export default TOKEN;
