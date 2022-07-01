import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TradeItem from "./tradeItem";
import classes from "./tradesList.module.css";

import { LiveTrade } from "../../data/types";

type Props = {
  trades?: LiveTrade[];
};

function TradeList({ trades }: Props) {
  const [currentItems, setCurrentItems] = useState<LiveTrade[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    if (trades) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(trades.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(trades.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, trades]);

  const handlePageClick = (event) => {
    if (trades) {
      const newOffset = (event.selected * itemsPerPage) % trades.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <Fragment>
      <ul className={classes.list}>
        {currentItems?.map((trade) => (
          <TradeItem key={trade._id} trade={trade} />
        ))}
      </ul>
      <ReactPaginate
        className={classes.paginator}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName={classes.paginatorPage}
        activeClassName={classes.paginatorActivePage}
        nextLinkClassName={classes.paginatorNextLink}
        previousLinkClassName={classes.paginatorPrevLink}
        renderOnZeroPageCount={() => null}
      />
    </Fragment>
  );
}

export default TradeList;
