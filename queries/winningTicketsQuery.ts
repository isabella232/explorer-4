import { gql } from "@apollo/client";

export const winningTicketsQuery = gql`
  query tickets(
    $where: WinningTicketRedeemedEvent_filter
    $first: Int
    $skip: Int
    $orderBy: WinningTicketRedeemedEvent_orderBy
    $orderDirection: OrderDirection
  ) {
    tickets: winningTicketRedeemedEvents(
      where: $where
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      transaction {
        id
      }
      faceValue
      faceValueUSD
      timestamp
      sender {
        id
      }
      recipient {
        id
        activationRound
        deactivationRound
        threeBoxSpace {
          __typename
          id
          did
          website
          description
          name
          image
        }
      }
    }
    protocol(id: "0") {
      id
      currentRound {
        id
      }
    }
  }
`;
