import CoinlistImg from "../assets/images/investors/Coinlist.jpg.webp";
import RepublicImg from "../assets/images/investors/Republic.jpg.webp";
import SuperfarmImg from "../assets/images/investors/Superfarm.jpg.webp";
import NeoTokyoImg from "../assets/images/investors/NeoTokyo.jpg.webp";
import UnixImg from "../assets/images/investors/Unix.jpg.webp";
import MeritCircleImg from "../assets/images/investors/Sin.City_website_backers_merit_circle.png.webp";
import YieldGuildImg from "../assets/images/investors/yieldguild.jpg.webp";
import PerionDAOImg from "../assets/images/investors/PerionDAO.jpg.webp";
import GuildFiImg from "../assets/images/investors/GuildFi.jpg.webp";
import BinanceNFTImg from "../assets/images/investors/BinanceNFT.jpg.webp";
import FractalImg from "../assets/images/investors/fractal.jpg.webp";
import CoinMarketCapImg from "../assets/images/investors/CoinMarketCap.jpg.webp";
import IlluviumImg from "../assets/images/investors/Illuvium.jpg.webp";
import SynthetixImg from "../assets/images/investors/Synthetix.jpg.webp";

const PARTNERS = [
  {
    href: "https://coinlist.co/",
    name: "Coinlist",
    img: CoinlistImg,
  },
  {
    href: "https://republic.com/",
    name: "Republic",
    img: RepublicImg,
  },
  {
    href: "https://superfarm.com/",
    name: "Superfarm",
    img: SuperfarmImg,
  },
  {
    href: "https://neotokyo.codes/",
    name: "Neo Tokyo",
    img: NeoTokyoImg,
  },
  {
    href: "https://www.unixgaming.org/",
    name: "Unix",
    img: UnixImg,
  },
  {
    href: "https://meritcircle.io/",
    name: "Merit Circle",
    img: MeritCircleImg,
  },
  {
    href: "https://yieldguild.io/",
    name: "Yield Guild",
    img: YieldGuildImg,
  },
  {
    href: "https://perion.gg/",
    name: "PerionDAO",
    img: PerionDAOImg,
  },
  {
    href: "https://guildfi.com/",
    name: "GuildFi",
    img: GuildFiImg,
  },
  {
    href: "https://www.binance.com/en/nft/home",
    name: "Binance NFT",
    img: BinanceNFTImg,
  },
  {
    href: "https://www.fractal.is/",
    name: "Fractal",
    img: FractalImg,
  },
  {
    href: "https://coinmarketcap.com/",
    name: "Coinmarketcap",
    img: CoinMarketCapImg,
  },
  {
    href: "https://www.illuvium.io/",
    name: "Illuvium",
    img: IlluviumImg,
  },
  {
    href: "https://synthetix.io/",
    name: "Synthetix",
    img: SynthetixImg,
  },
];

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
