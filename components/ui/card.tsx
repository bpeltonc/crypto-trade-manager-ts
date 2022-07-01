import { ReactNode } from "react";
import classes from "./card.module.css";

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  return <div className={classes.card}>{children}</div>;
}

export default Card;
