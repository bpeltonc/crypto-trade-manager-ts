import React, { useState, useEffect } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import TradesList from "../components/trades/tradesList";
import { LiveTrade, Trade } from "../data/types";
import { getProfitInfo } from "../util/utils";

type Props = {
  trades: Trade[];
};

export default function Home({ trades }: Props) {
  const [liveTrades, setLiveTrades] = useState<LiveTrade[]>();

  useEffect(() => {
    const liveTrades = getProfitInfo(trades);
    Promise.all(liveTrades).then((val) => setLiveTrades(val));
  }, [trades]);

  return (
    <React.Fragment>
      <Head>
        <title>Crypto Trade Manager</title>
        <meta
          name="description"
          content="Manage your crypto trades in one convenient app"
        />
      </Head>
      <TradesList trades={liveTrades} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGODB_URI!
  );

  const db = client.db("myFirstDatabase");

  const tradesCollection = db.collection("trades");

  const data = await tradesCollection.find().toArray();

  const trades = data.map((trade) => {
    const dash = trade.symbol.indexOf("-");
    const mainCurr = trade.symbol.substring(0, dash);
    return {
      ...trade,
      logo: `https://cryptoicons.org/api/icon/${mainCurr.toLowerCase()}/64`,
      _id: trade._id.toString(),
    };
  });

  client.close();

  return {
    props: {
      trades,
    },
  };
}
