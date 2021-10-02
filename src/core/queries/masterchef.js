import gql from "graphql-tag";

export const lockupUserQuery = gql`
  query lockupUserQuery($address: String!) {
    users(first: 1000, where: { amount_gt: 0, address: $address }) {
      id
      amount
      address
      rewardDebt
      pool {
        id
        lockup {
          totalAllocPoint
        }
        balance
        accSuniPerShare
      }
    }
  }
`;

const poolUserFragment = gql`
  fragment PoolUser on User {
    id
    address
    pool {
      id
      pair
      balance
      accSuniPerShare
      lastRewardBlock
    }
    amount
    rewardDebt
    entryUSD
    exitUSD
    suexHarvested
    suexHarvestedUSD
  }
`;

export const poolUserQuery = gql`
  query poolUserQuery($address: String!, $amount_gt: Int! = 0) {
    users(where: { address: $address, amount_gt: $amount_gt }) {
      ...PoolUser
    }
  }
  ${poolUserFragment}
`;

export const poolHistoryQuery = gql`
  query poolHistoryQuery($id: String!) {
    poolHistories(first: 1000, where: { pool: $id }, orderBy: timestamp) {
      id
      pool {
        id
        accSuexPerShare
      }
      segBalance
      segAge
      segAgeRemoved
      segDeposited
      segWithdrawn
      entryUSD
      exitUSD
      suexHarvestedUSD
      userCount
      timestamp
      block
    }
  }
`;

export const poolQuery = gql`
  query poolQuery($id: ID!) {
    pool(id: $id) {
      id
      pair
      allocPoint
      lastRewardBlock
      accSuexPerShare
      balance
      userCount
      owner {
        id
        suwpPerBlock
        totalAllocPoint
      }
      users(orderBy: amount, orderDirection: desc) {
        id
        address
        amount
        rewardDebt
      }
      segAge
      liquidityPair @client
      timestamp
      entryUSD
      exitUSD
    }
  }
`;

export const poolIdsQuery = gql`
  query poolIdsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "timestamp"
    $orderDirection: String! = "desc"
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
    }
  }
`;

export const poolsQuery = gql`
  query poolsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "timestamp"
    $orderDirection: String! = "desc"
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      pair
      allocPoint
      lastRewardBlock
      accSuexPerShare
      balance
      userCount
      owner {
        id
        suwpPerBlock
        totalAllocPoint
      }
      # users {
      #   id
      #   address
      #   amount
      #   rewardDebt
      # }
      liquidityPair @client
      roiPerBlock @client
      roiPerHour @client
      roiPerDay @client
      roiPerMonth @client
      roiPerYear @client
      rewardPerThousand @client
      tvl @client
      timestamp
    }
  }
`;
