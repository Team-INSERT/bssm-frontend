export default interface IComment {
  id: number;
  content: string;
  createdAt: string;
  permission: boolean;
  depth: number;
  delete: boolean;
  user: {
    code: number;
    nickname: string;
  };
}
