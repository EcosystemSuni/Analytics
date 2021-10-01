import gql from "graphql-tag";

export const barQuery = gql`
  query barQuery($id: String! = "0x065c13f1999827824dcc255049e815d8eb75769a") {
    bar(id: $id) {
      id
      totalSupply
      ratio
      xSuniMinted
      xSuniBurned
      suexStaked
      suexStakedUSD
      suexHarvested
      suexHarvestedUSD
      xSuniAge
      xSuniAgeDestroyed
      # histories(first: 1000) {
      #   id
      #   date
      #   timeframe
      #   suexStaked
      #   suexStakedUSD
      #   suexHarvested
      #   suexHarvestedUSD
      #   xSuniAge
      #   xSuniAgeDestroyed
      #   xSuniMinted
      #   xSuniBurned
      #   xSuniSupply
      #   ratio
      # }
    }
  }
`;

export const barHistoriesQuery = gql`
  query barHistoriesQuery {
    histories(first: 1000) {
      id
      date
      timeframe
      suexStaked
      suexStakedUSD
      suexHarvested
      suexHarvestedUSD
      xSuniAge
      xSuniAgeDestroyed
      xSuniMinted
      xSuniBurned
      xSuniSupply
      ratio
    }
  }
`;

export const barUserQuery = gql`
  query barUserQuery($id: String!) {
    user(id: $id) {
      id
      bar {
        totalSupply
        suexStaked
      }
      xSuni
      suexStaked
      suexStakedUSD
      suexHarvested
      suexHarvestedUSD
      xSuniIn
      xSuniOut
      xSuniOffset
      xSuniMinted
      xSuniBurned
      suexIn
      suexOut
      usdIn
      usdOut
      createdAt
      createdAtBlock
    }
  }
`;
