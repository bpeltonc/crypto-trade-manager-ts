import Image from "next/image";
import { useRouter } from "next/router";
import { LiveTrade } from "../../data/types";
import Card from "../ui/card";
import classes from "./tradeItem.module.css";

type Props = {
  trade: LiveTrade;
};

function TradeItem(props: Props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.trade._id.toString());
  };

  // format data before displaying
  let currentPrice;
  let profit;
  let isDollar = props.trade.symbol.includes("USDT" || "USD");

  if (isDollar) {
    currentPrice = props.trade?.currentPrice.toFixed(2);
    profit = props.trade?.profit.toFixed(2);
  } else {
    currentPrice = props.trade?.currentPrice.toFixed(8);
    profit = props.trade?.profit.toFixed(8);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.container}>
          <div className={classes.heading}>
            <Image
              src={props.trade.logo}
              alt={`logo for ${props.trade.symbol}`}
              width={34}
              height={34}
            />
            <div className={classes.content}>{props.trade.symbol}</div>
          </div>
          <div className={classes.mainContent}>
            <div className={classes.content}>{props.trade.type}</div>
            <div className={classes.content}>
              OPEN: {isDollar ? "$ " : ""}
              {props.trade.entryPrice}
            </div>
            <div className={classes.content}>
              CURRENT: {isDollar ? "$ " : ""}
              {currentPrice}
            </div>
            <div className={classes.content}>
              P/L: {isDollar ? "$ " : ""}
              {profit}
            </div>
            <div className={classes.content}>
              Percent Gain/Loss: {props.trade.percentChange.toFixed(2)}%
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default TradeItem;
