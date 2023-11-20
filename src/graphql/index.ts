import Storage from "@/storage";
import { TOKEN } from "@/storage/constants";
import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
  {
    headers: {
      Authorization: Storage.getItem(TOKEN.ACCESS) || "",
    },
  },
);
