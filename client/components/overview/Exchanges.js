import * as React from "react";
import { CardMedia, Stack } from "@mui/material";
import Title from "../tile/Title";

import UniswapIcon from "../../assets/images/uniswapwhite.png";
import KucoinIcon from "../../assets/images/kucoinicon_white.png";
import ByBitIcon from "../../assets/images/bybit_white.png";
import BitmartIcon from "../../assets/images/bitmart_white.png";

const exchanges = [
  {
    img: KucoinIcon,
    height: "52px",
    padding: "10px",
    link: "https://www.kucoin.com/trade/SYNR-USDT?spm=kcWeb.B5markets.tradeList.1",
  },
  {
    img: ByBitIcon,
    height: "40px",
    padding: "12px",
    link: "https://www.bybit.com/en-US/trade/spot/SYNR/USDT",
  },
  {
    img: BitmartIcon,
    height: "45px",
    padding: "10px",
    link: "https://www.bitmart.com/trade/en?layout=basic&symbol=SYNR_USDT",
  },
  {
    img: UniswapIcon,
    height: "55px",
    padding: "0px",
    link: "https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xbc6e06778708177a18210181b073da747c88490a",
  },
];

function Exchanges({ title = "", style = {} }) {
  let i = 0;
  return (
    <div>
      {title ? <Title title={title} upperCase={false} /> : null}
      <Stack
        direction="row"
        spacing={3}
        align="center"
        justifyContent="center"
        sx={style}
      >
        {exchanges.map((exchange, index) => {
          return (
            <a href={exchange.link} key={"exchange_" + i++}>
              <CardMedia
                key={"exchange_" + i++}
                style={{
                  width: "auto",
                  maxHeight: exchange.height,
                  paddingTop: exchange.padding,
                }}
                component="img"
                image={exchange.img}
              />
            </a>
          );
        })}
      </Stack>
    </div>
  );
}

export default Exchanges;
