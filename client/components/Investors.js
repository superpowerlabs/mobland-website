import superPowerImage from "../assets/images/investors/super-power.png.webp";
import meritCircleImage from "../assets/images/investors/Sin.City_website_backers_merit_circle.png.webp";
import justinKanImage from "../assets/images/investors/Sin.City_website_backers_justin-kan.png.webp";
import robinChanImage from "../assets/images/investors/Sin.City_website_backers_robin-chan.png.webp";
import alexPackImage from "../assets/images/investors/Sin.City_website_backers_alex-pack.png.webp";
import jordanMomtaziImage from "../assets/images/investors/Sin.City_website_backers_jordan-momtazi.png.webp";
import kainWarwickImage from "../assets/images/investors/Sin.City_website_backers_kain-warwick.png.webp";
import doKwonImage from "../assets/images/investors/Sin.City_website_backers_do-kwon.png.webp";
import paulMenchovImage from "../assets/images/investors/Sin.City_website_backers_paul-menchov.png.webp";
import lukeWagmanImage from "../assets/images/investors/Sin.City_website_backers_luke-wagman.png.webp";
import elliotWainmanImage from "../assets/images/investors/Sin.City_website_backers_elliot-wainman.png.webp";
import ksiImage from "../assets/images/investors/Sin.City_website_backers_ksi.png.webp";
import kieranWarwickImage from "../assets/images/investors/Sin.City_website_backers_kieran-warwick.png.webp";
import santiagoRSantosImage from "../assets/images/investors/Sin.City_website_backers_santiago-r-santos.png.webp";
import alexBeckerImage from "../assets/images/investors/Sin.City_website_backers_alex_becker.png.webp";
import animocaImage from "../assets/images/investors/animoca.png.webp";
import longlingImage from "../assets/images/investors/longling.png.webp";
import spartanGroupImage from "../assets/images/investors/spartangroup.png.webp";
import aandTImage from "../assets/images/investors/a&t.png.webp";
import hyperedgeImage from "../assets/images/investors/hyperedge.png.webp";
import shimaCapitalImage from "../assets/images/investors/shimacapital.png.webp";
import iAngelsImage from "../assets/images/investors/iangels.png.webp";

const INVESTORS = [
  {
    href: "https://twitter.com/superpowerlive",
    name: "Superpower",
    img: superPowerImage,
  },
  {
    href: "https://meritcircle.io/",
    name: "Merit Circle",
    img: meritCircleImage,
  },
  {
    href: "https://twitter.com/justinkan?lang=en",
    name: "Justin Kan",
    img: justinKanImage,
    company: "Goat Capital & Co-founder Twitch",
  },
  {
    href: "https://twitter.com/robinchan",
    name: "Robin Chan",
    img: robinChanImage,
    company: "Founder Goat Capital",
  },
  {
    href: "https://twitter.com/alpackaP",
    name: "Alex Pack",
    img: alexPackImage,
    company: "HACK VC",
  },
  {
    href: "https://twitter.com/hjmomtazi",
    name: "Jordan Momtazi",
    img: jordanMomtaziImage,
    company: "Synthetix",
  },
  {
    href: "https://twitter.com/kaiynne",
    name: "Kain Warwick",
    img: kainWarwickImage,
    company: "Founder Synthetix",
  },
  {
    href: "https://twitter.com/stablekwon",
    name: "Do Kwon",
    img: doKwonImage,
    company: "Founder Terra",
    skip: true,
  },
  {
    href: "https://twitter.com/pmenchov",
    name: "Paul Menchov",
    img: paulMenchovImage,
    company: "Co-founder Coinlist",
  },
  {
    href: "https://twitter.com/lukeswagman",
    name: "Luke Wagman",
    img: lukeWagmanImage,
    company: "Co-founder CoinMarketCap",
  },
  {
    href: "https://twitter.com/elliotrades",
    name: "Elliot Wainman",
    img: elliotWainmanImage,
    company: "Co-founder Superfarm",
  },
  {
    href: "https://www.youtube.com/c/ksi/featured",
    name: "KSI",
    img: ksiImage,
    company: "Youtuber",
  },
  {
    href: "https://twitter.com/KieranWarwick",
    name: "Kieran Warwick",
    img: kieranWarwickImage,
    company: "Co-founder Illuvium",
  },
  {
    href: "https://twitter.com/santiagoroel",
    name: "Santiago R Santos",
    img: santiagoRSantosImage,
  },
  {
    href: "https://twitter.com/ZssBecker",
    name: "Alex Becker",
    img: alexBeckerImage,
  },
  {
    href: "https://twitter.com/animocabrands",
    name: "Animoca",
    img: animocaImage,
  },
  {
    href: "http://www.longling.com/?lang=en",
    name: "Longling",
    img: longlingImage,
  },
  {
    href: "https://twitter.com/TheSpartanGroup",
    name: "Spartan Group",
    img: spartanGroupImage,
  },
  {
    href: "https://capitalant.com/",
    name: "A&T",
    img: aandTImage,
  },
  {
    href: "https://www.hyperedge.capital/",
    name: "Hyperedge",
    img: hyperedgeImage,
  },
  {
    href: "https://shima.capital/",
    name: "Shima Capital",
    img: shimaCapitalImage,
  },
  {
    href: "https://www.iangels.com/",
    name: "iAngels",
    img: iAngelsImage,
  },
];

class Investors {
  constructor() {
    this.items = INVESTORS;
  }
  getItems() {
    return this.items;
  }
}

let instance;
if (!instance) instance = new Investors();

export default instance;
