import Link from "next/link";
import classes from "./mainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Crypto Trade Manager</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Trades</Link>
          </li>
          <li>
            <Link href="/newTrade">Log New Trade</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
