import BambooPostType from "../bambooPost.interface";

interface BambooPostListItemProps extends BambooPostType {
  isAdmin: boolean;
  isManageMode?: boolean;
}

export default BambooPostListItemProps;
