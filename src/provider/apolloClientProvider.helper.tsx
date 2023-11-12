import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { RetryLink } from "@apollo/client/link/retry";
import { PropsWithChildren } from "react";
import Storage from "@/storage";
import { TOKEN } from "@/storage/constants";
import { refresh } from "@/apis/token";

const authLink = setContext((_, { headers }) => {
  const token = Storage.getItem(TOKEN.ACCESS);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ operation, forward }) => {
  refresh().then(() => forward(operation));
});

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}api/graphql`,
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 2,
    retryIf: (error) => !!error,
  },
});

const client = new ApolloClient({
  link: retryLink.concat(errorLink).concat(authLink).concat(httpLink),
  headers: {
    Authorization: Storage.getItem(TOKEN.ACCESS) ?? "",
  },
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
