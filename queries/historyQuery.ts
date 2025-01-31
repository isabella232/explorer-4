import { gql } from "@apollo/client";

export const historyQuery = gql`
  query transactions($account: String!, $first: Int!, $skip: Int!) {
    transactions(
      orderBy: timestamp
      orderDirection: desc
      where: { from: $account }
      first: $first
      skip: $skip
    ) {
      events {
        __typename
        round {
          id
        }
        transaction {
          id
          timestamp
        }
        ... on BondEvent {
          delegator {
            id
          }
          newDelegate {
            id
          }
          oldDelegate {
            id
          }
          additionalAmount
        }
        ... on UnbondEvent {
          delegate {
            id
          }
          amount
        }
        ... on RebondEvent {
          delegate {
            id
          }
          amount
        }
        ... on TranscoderUpdateEvent {
          rewardCut
          feeShare
        }
        ... on RewardEvent {
          rewardTokens
        }
        ... on WithdrawStakeEvent {
          amount
        }
        ... on WithdrawFeesEvent {
          amount
        }
        ... on WinningTicketRedeemedEvent {
          faceValue
        }
        ... on DepositFundedEvent {
          sender {
            id
          }
          amount
        }
        ... on ReserveFundedEvent {
          reserveHolder {
            id
          }
          amount
        }
      }
    }
  }
`;
