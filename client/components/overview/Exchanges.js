import * as React from "react";
import { CardMedia, Stack } from "@mui/material";
import Title from "../tile/Title";

import UniswapIcon from "../../images/UniswapWhite.png";
import KucoinIcon from "../../images/KucoinIcon_White.png";
import ByBitIcon from "../../images/ByBit_White.png";
import BitmartIcon from "../../images/Bitmart_White.png";

const exchanges = [
  {
    img: KucoinIcon,
    height: "52px",
    padding: "10px",
  },
  {
    img: ByBitIcon,
    height: "40px",
    padding: "12px",
  },
  {
    img: BitmartIcon,
    height: "45px",
    padding: "10px",
  },
  {
    img: UniswapIcon,
    height: "55px",
    padding: "0px",
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
          );
        })}
      </Stack>
    </div>
  );
}

export default Exchanges;
