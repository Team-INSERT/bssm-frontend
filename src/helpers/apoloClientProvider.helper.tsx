import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL,
  cache: new InMemoryCache(),
});

const ApoloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApoloClientProvider;
