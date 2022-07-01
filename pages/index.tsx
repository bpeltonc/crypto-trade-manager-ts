import React, { useState, useEffect } from "react";
import Head from "next/head";
import TradesList from "../components/trades/tradesList";
import { LiveTrade } from "../data/types";
import { getProfitInfo } from "../util/utils";

const FAKE_DATA = [
  {
    _id: 1,
    symbol: "LTC-BTC",
    type: "long",
    entryPrice: 0.002,
    comment: "test",
    user: "Brandon Pelton-Cox",
  },
  {
    _id: 2,
    symbol: "ETH-BTC",
    type: "long",
    entryPrice: 0.013,
    comment: "test",
    user: "Brandon Pelton-Cox",
  },
  {
    _id: 3,
    symbol: "BTC-USDT",
    type: "long",
    entryPrice: 13412.09,
    comment: "test",
    user: "Brandon Pelton-Cox",
  },
  {
    _id: 4,
    symbol: "XRP-BTC",
    type: "long",
    entryPrice: 0.00155,
    comment: "test",
    user: "Brandon Pelton-Cox",
  },
  {
    _id: 5,
    symbol: "BCH-BTC",
    type: "long",
    entryPrice: 0.01,
    comment: "test",
    user: "Brandon Pelton-Cox",
  },
  {
    _id: 6,
    symbol: "BTC-USDT",
    type: "long",
    entryPrice: 26523.19,
    comment: "test",
    user: "Brandon Pelton-Cox",
  },
];

export default function Home() {
  const [trades, setTrades] = useState<LiveTrade[]>();

  useEffect(() => {
    const liveTrades = getProfitInfo(FAKE_DATA);
    Promise.all(liveTrades).then((val) => setTrades(val));
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Crypto Trade Manager</title>
        <meta
          name="description"
          content="Manage your crypto trades in one convenient app"
        />
      </Head>
      <TradesList trades={trades} />
    </React.Fragment>
  );
}
