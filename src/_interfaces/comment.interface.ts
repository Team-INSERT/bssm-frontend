export default interface IComment {
  id: number;
  detail: string;
  reCommentCount: number;
  postId: number;
  likeCount: number;
  createdAt: string;
  doesLike: boolean;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
}
