import * as React from "react";
import { CardMedia, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../tile/Title";

import mobland from "../../images/mobland-white-icon.png";
import opensea from "../../images/opensea.png";
import binance from "../../images/binance.png";

const exchanges = [
  {
    img: mobland,
    height: "52px",
    padding: "10px",
    link: "https://shadowmarket.mob.land",
  },
  {
    img: opensea,
    height: "40px",
    padding: "12px",
    link: "https://opensea.io/assets?search[query]=mobland%20",
  },
  {
    img: binance,
    height: "45px",
    padding: "10px",
    link: "https://www.binance.com/en/nft/header-search?keyword=mobland",
  },
];

function NftExchange({ title = "", style = {} }) {
  let i = 0;
  return (
    <div>
      {title ? <Title title={title} upperCase={false} /> : null}
      <div className={"centered"}>
        Look at{" "}
        <Link to={"/assetsguide"}>
          <span className={"yellow"}>Assets</span>{" "}
        </Link>{" "}
        to see where to get them.
      </div>
      {/*<Stack*/}
      {/*  direction="row"*/}
      {/*  spacing={3}*/}
      {/*  align="center"*/}
      {/*  justifyContent="center"*/}
      {/*  sx={style}*/}
      {/*>*/}
      {/*  {exchanges.map((exchange, index) => {*/}
      {/*    return (*/}
      {/*      <a href={exchange.link} key={"exchange_" + i++}>*/}
      {/*        <CardMedia*/}
      {/*          key={"exchange_" + i++}*/}
      {/*          style={{*/}
      {/*            width: "auto",*/}
      {/*            maxHeight: exchange.height,*/}
      {/*            paddingTop: exchange.padding,*/}
      {/*          }}*/}
      {/*          component="img"*/}
      {/*          image={exchange.img}*/}
      {/*        />*/}
      {/*      </a>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</Stack>*/}
    </div>
  );
}

export default NftExchange;
