const PARTNERS = [
  {
    href: "https://coinlist.co/",
    name: "Coinlist",
    img: require("../assets/images/investors/optimized/Coinlist.jpg.webp"),
  },
  {
    href: "https://republic.com/",
    name: "Republic",
    img: require("../assets/images/investors/optimized/Republic.jpg.webp"),
  },
  {
    href: "https://superfarm.com/",
    name: "Superfarm",
    img: require("../assets/images/investors/optimized/Superfarm.jpg.webp"),
  },
  {
    href: "https://neotokyo.codes/",
    name: "Neo Tokyo",
    img: require("../assets/images/investors/optimized/NeoTokyo.jpg.webp"),
  },
  {
    href: "https://www.unixgaming.org/",
    name: "Unix",
    img: require("../assets/images/investors/optimized/Unix.jpg.webp"),
  },
  {
    href: "https://meritcircle.io/",
    name: "Merit Circle",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_merit_circle.png.webp"),
  },
  {
    href: "https://yieldguild.io/",
    name: "Yield Guild",
    img: require("../assets/images/investors/optimized/yieldguild.jpg.webp"),
  },
  {
    href: "https://perion.gg/",
    name: "PerionDAO",
    img: require("../assets/images/investors/optimized/PerionDAO.jpg.webp"),
  },
  {
    href: "https://guildfi.com/",
    name: "GuildFi",
    img: require("../assets/images/investors/optimized/GuildFi.jpg.webp"),
  },
  {
    href: "https://www.binance.com/en/nft/home",
    name: "Binance NFT",
    img: require("../assets/images/investors/optimized/BinanceNFT.jpg.webp"),
  },
  {
    href: "https://www.fractal.is/",
    name: "Fractal",
    img: require("../assets/images/investors/optimized/fractal.jpg.webp"),
  },
  {
    href: "https://coinmarketcap.com/",
    name: "Coinmarketcap",
    img: require("../assets/images/investors/optimized/CoinMarketCap.jpg.webp"),
  },
  {
    href: "https://www.illuvium.io/",
    name: "Illuvium",
    img: require("../assets/images/investors/optimized/Illuvium.jpg.webp"),
  },
  {
    href: "https://synthetix.io/",
    name: "Synthetix",
    img: require("../assets/images/investors/optimized/Synthetix.jpg.webp"),
  }
]

class Partners {
  constructor() {
    this.items = PARTNERS;
  }
  getItems() {
    return this.items;
  }
}

let instance;
if (!instance) instance = new Partners();

export default instance;