import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export { default as getStaticApolloProps } from "./getStaticApolloProps";
export { withApollo } from "./withApollo";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_SUBGRAPH,
  }),
  cache: new InMemoryCache(),
});

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",
  }),
  cache: new InMemoryCache(),
});
