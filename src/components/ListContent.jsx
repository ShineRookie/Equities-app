import React from "react";

const ListContent = ({ item }) => {
  return (
    <>
      <div className={"reports__item--logo"}>
        <img className={"logo"} src={item.logo} alt={"logo"}></img>
        <div className={"reports__item--names"}>
          <p className={"symbol"}>{item.symbol}</p>
          <p className={"companyName"}>{item.companyName}</p>
        </div>
      </div>
      <a
        href={`https://www.tradingview.com/symbols/${item.symbol}`}
        target={"_blank"}
        className={"btn price-btn"}
      >{`$${item.latestPrice}`}</a>
    </>
  );
};

export default ListContent;
