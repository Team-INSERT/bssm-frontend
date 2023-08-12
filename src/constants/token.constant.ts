export interface IToken {
  [TOKEN: string]: "access_token" | "refresh_token" | "post_render_limit";
}

const TOKEN = {
  ACCESS: "bsm_token_v1",
  REFRESH: "bsm_refresh_token_v1",
  POST_RENDER_LIMIT: "post_render_limit",
} as const;

export default TOKEN;
