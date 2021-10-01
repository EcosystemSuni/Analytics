import { AppShell, Curves, KPI } from "app/components";
import { Grid, Paper, useTheme } from "@material-ui/core";
import {
  barHistoriesQuery,
  barQuery,
  dayDatasQuery,
  ethPriceQuery,
  factoryQuery,
  getApollo,
  getBar,
  getBarHistories,
  getDayData,
  getEthPrice,
  getFactory,
  getSushiToken,
  tokenQuery,
  useInterval,
} from "app/core";

import Chart from "../../components/Chart";
import Head from "next/head";
import { ParentSize } from "@visx/responsive";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  charts: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function BarPage() {
  const classes = useStyles();

  const theme = useTheme();

  const {
    data: { bar },
  } = useQuery(barQuery, {
    context: {
      clientName: "bar",
    },
  });

  const {
    data: { histories },
  } = useQuery(barHistoriesQuery, {
    context: {
      clientName: "bar",
    },
  });

  const {
    data: { factory },
  } = useQuery(factoryQuery);

  const {
    data: { token },
  } = useQuery(tokenQuery, {
    variables: {
      id: "0x3a49360098cf9061630211874398ec75704c0595",
    },
  });

  const {
    data: { bundles },
  } = useQuery(ethPriceQuery);

  const {
    data: { dayDatas },
  } = useQuery(dayDatasQuery);

  const suexPrice =
    parseFloat(token?.derivedETH) * parseFloat(bundles[0].ethPrice);

  useInterval(async () => {
    await Promise.all([
      getBar,
      getBarHistories,
      getDayData,
      getFactory,
      getSushiToken,
      getEthPrice,
    ]);
  }, 60000);

  const {
    suexStakedUSD,
    suexHarvestedUSD,
    xSuniMinted,
    xSuniBurned,
    xSuni,
    apr,
    apy,
    fees,
  } = histories.reduce(
    (previousValue, currentValue) => {
      const date = currentValue.date * 1000;
      const dayData = dayDatas.find((d) => d.date === currentValue.date);
      
      //console.log('datassss', dayData)
      
      previousValue["suexHarvestedUSD"].push({
        date,
        value: parseFloat(currentValue.suexStakedUSD),
      });
      previousValue["suexHarvestedUSD"].push({
        date,
        value: parseFloat(currentValue.suexHarvestedUSD),
      });

      previousValue["xSuniMinted"].push({
        date,
        value: parseFloat(currentValue.xSuniMinted),
      });
      previousValue["xSuniBurned"].push({
        date,
        value: parseFloat(currentValue.xSuniBurned),
      });
      
      previousValue["xSuni"].push({
        date,
        value: parseFloat(currentValue.xSuniSupply),
      });

      const apr = (dayData) ? (((dayData.volumeUSD * 0.05 * 0.01) / currentValue.xSuniSupply) * 365) / (currentValue.ratio * suexPrice) : null;

      previousValue["apr"].push({
        date,
        value: parseFloat(apr * 100),
      });
      previousValue["apy"].push({
        date,
        value: parseFloat((Math.pow(1 + apr / 365, 365) - 1) * 100),
      });
      previousValue["fees"].push({
        date,
        value: parseFloat((dayData) ? dayData.volumeUSD : 0 * 0.005),
      });
      return previousValue;
    },
    {
      suexStakedUSD: [],
      suexHarvestedUSD: [],
      xSuniMinted: [],
      xSuniBurned: [],
      xSuni: [],
      apr: [],
      apy: [],
      fees: [],
    }
  );

  const averageApy =
    apy.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.value;
    }, 0) / apy.length;

  const oneDayVolume = factory.volumeUSD - factory.oneDay.volumeUSD;

  const APR = (((oneDayVolume * 0.05 * 0.01) / bar.totalSupply) * 365) / (bar.ratio * suexPrice);

  const APY = Math.pow(1 + APR / 365, 365) - 1;

  return (
    <AppShell>
      <Head>
        <title>Suex Bar | SUNI Analytics</title>
      </Head>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {/* <Grid item xs>
              <KPI
                title="xSuni Age"
                value={parseFloat(bar.xSuniAge).toLocaleString()}
              />
            </Grid> */}
            <Grid item xs={12} sm={6} md={3}>
              <KPI title="APY (24h)" value={APY * 100} format="percent" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <KPI title="APY (Avg)" value={averageApy} format="percent" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <KPI title="xSuni" value={bar.totalSupply} format="integer" />
            </Grid>
            {/* <Grid item xs={12} sm={6} md={3}>
              <KPI
                title="Sushi"
                value={parseInt(bar.sushiStaked).toLocaleString()}
              />
            </Grid> */}
            <Grid item xs={12} sm={6} md={3}>
              <KPI title="xSuni:Suex" value={Number(bar.ratio).toFixed(4)} />
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item xs={12}>
          <Paper
            variant="outlined"
            style={{ height: 300, position: "relative" }}
          >
            <Lines
              title="xSuni Age & xSuni Age Destroyed"
              margin={{ top: 64, right: 32, bottom: 32, left: 64 }}
              strokes={[
                theme.palette.positive.light,
                theme.palette.negative.light,
              ]}
              lines={[xSuniAge, xSuniAgeDestroyed]}
            />
          </Paper>
        </Grid> */}

        <Grid item xs={12}>
          <Paper
            variant="outlined"
            style={{ display: "flex", height: 400, flex: 1 }}
          >
            <ParentSize>
              {({ width, height }) => (
                <Curves
                  width={width}
                  height={height}
                  margin={{ top: 64, right: 32, bottom: 0, left: 64 }}
                  data={[apy, apr]}
                  labels={["APY", "APR"]}
                />
              )}
            </ParentSize>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            variant="outlined"
            style={{ display: "flex", height: 400, flex: 1 }}
          >
            <ParentSize>
              {({ width, height }) => (
                <Curves
                  width={width}
                  height={height}
                  title="Fees received (USD)"
                  margin={{ top: 64, right: 32, bottom: 0, left: 64 }}
                  data={[fees]}
                />
              )}
            </ParentSize>
          </Paper>
        </Grid>

        {/* <Grid item xs={12}>
          <Paper
            variant="outlined"
            style={{ display: "flex", height: 400, flex: 1 }}
          >
            <ParentSize>
              {({ width, height }) => (
                <Curves
                  width={width}
                  height={height}
                  title="xSuni:Sushi & Sushi:xSuni"
                  margin={{ top: 64, right: 32, bottom: 0, left: 64 }}
                  data={[xSuniSushi, xSuniPerSushi]}
                />
              )}
            </ParentSize>
          </Paper>
        </Grid> */}

        <Grid item xs={12}>
          <Paper
            variant="outlined"
            style={{ display: "flex", height: 400, flex: 1 }}
          >
            <ParentSize>
              {({ width, height }) => (
                <Curves
                  width={width}
                  height={height}
                  data={[suexStakedUSD, suexHarvestedUSD]}
                  margin={{ top: 64, right: 32, bottom: 0, left: 64 }}
                  labels={["Suex Staked (USD)", "Suex Harvested (USD)"]}
                />
              )}
            </ParentSize>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            variant="outlined"
            style={{ display: "flex", height: 400, flex: 1 }}
          >
            <ParentSize>
              {({ width, height }) => (
                <Curves
                  width={width}
                  height={height}
                  margin={{ top: 64, right: 32, bottom: 0, left: 64 }}
                  data={[xSuniMinted, xSuniBurned]}
                  labels={["xSuni Minted", "xSuni Burned"]}
                />
              )}
            </ParentSize>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            variant="outlined"
            style={{ display: "flex", height: 400, flex: 1 }}
          >
            <ParentSize>
              {({ width, height }) => (
                <Curves
                  width={width}
                  height={height}
                  title="xSuni Total Supply"
                  margin={{ top: 64, right: 32, bottom: 0, left: 64 }}
                  data={[xSuni]}
                />
              )}
            </ParentSize>
          </Paper>

          {/* <Chart
            title="xSuni Total Supply"
            data={xSuni}
            height={400}
            margin={{ top: 56, right: 24, bottom: 0, left: 56 }}
            tooptip
            brush
          /> */}
        </Grid>
      </Grid>

      {/* <pre>{JSON.stringify(bar, null, 2)}</pre> */}
    </AppShell>
  );
}

export async function getStaticProps() {
  const client = getApollo();
  await getBar(client);
  await getBarHistories(client);
  await getFactory(client);
  await getDayData(client);
  await getSushiToken(client);
  await getEthPrice(client);
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 1,
  };
}

export default BarPage;
