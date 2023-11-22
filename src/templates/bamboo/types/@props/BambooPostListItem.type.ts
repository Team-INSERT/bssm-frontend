import BambooPostType from "../BambooPost.type";

interface BambooPostListItemProps extends BambooPostType {
  isAdmin: boolean;
  isManageMode?: boolean;
}

export default BambooPostListItemProps;
