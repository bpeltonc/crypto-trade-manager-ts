import { BittrexTickerResponse, LiveTrade, Trade } from "../data/types";

export function getProfitInfo(trades: Trade[]): Promise<LiveTrade>[] {
    return trades.map((trade) => {
        return fetch(`https://api.bittrex.com/v3/markets/${trade.symbol}/ticker`)
        .then((res: Response) => res.json(), (err: unknown) => {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("Error parsing json data");
            }
        })
        .then((data: BittrexTickerResponse) => {
            const currentPrice = parseFloat(data.lastTradeRate);
            let profit;
            if (trade.type === "long") profit = currentPrice - trade.entryPrice;
            else profit = trade.entryPrice - currentPrice;

            const percentChange = (profit / trade.entryPrice) * 100;
            const liveTrade: LiveTrade = {
                ...trade,
                currentPrice,
                profit,
                percentChange,
            };
            return liveTrade;
        }, (err: unknown) => {
            if (err instanceof Error) {
            throw new Error(err.message);
            } else {
            throw new Error("Error retrieving data");
            }
        })
    })
  }