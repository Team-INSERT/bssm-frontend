export default interface Comment {
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
