import Head from "next/head";
import MainNavigation from "./mainNavigation";
import classes from "./Layout.module.css";
import { Fragment, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={classes.wrapper}>
        <MainNavigation />
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>
          <div className={classes.footer_line}>
            <div className={classes.footer_content}>
              ©2022 Brandon D. Pelton-Cox
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Layout;
