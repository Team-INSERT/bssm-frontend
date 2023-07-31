import { rest } from "msw";

export const MOCK_API_BASE_URL = "http://localhost:3000";

const PostListData = [
  {
    id: 1,
    title: "test",
  },
  {
    id: 2,
    title: "test",
  },
  {
    id: 3,
    title: "test",
  },
];

export const handlers = [
  rest.get(`${MOCK_API_BASE_URL}/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PostListData));
  }),
];
