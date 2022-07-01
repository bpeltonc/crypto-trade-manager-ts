export interface Trade {
    _id: number;
    symbol: string;
    type: string;
    entryPrice: number;
    comment: string;
    user?: string;
}

export interface LiveTrade extends Trade {
    currentPrice: number;
    profit: number;
    percentChange: number;
}

export type BittrexTickerResponse = {
    symbol: string;
    lastTradeRate: string;
    bidRate: string;
    askRate: string;
}