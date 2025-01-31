import { gql } from "@apollo/client";

export const dayDataQuery = gql`
  query days(
    $first: Int
    $orderBy: Day_orderBy
    $orderDirection: OrderDirection
  ) {
    days(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
      date
      volumeUSD
      volumeETH
      participationRate
    }
  }
`;
