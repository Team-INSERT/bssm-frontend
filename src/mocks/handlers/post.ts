import { rest } from "msw";

export const MOCK_API_BASE_URL = "http://localhost:3000";

const PostListData = [
  {
    id: 1,
    title: "테스트입니다",
  },
  {
    id: 2,
    title: "테스트입니다",
  },
  {
    id: 3,
    title: "테스트입니다",
  },
];

export const handlers = [
  rest.get(`${MOCK_API_BASE_URL}/main/notice/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PostListData));
  }),
];
