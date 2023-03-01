const INVESTORS = [
  {
    href: "https://twitter.com/superpowerlive",
    name: "Superpower",
    img: require("../assets/images/investors/optimized/super-power.png.webp"),
  },
  {
    href: "https://meritcircle.io/",
    name: "Merit Circle",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_merit_circle.png.webp"),
  },
  {
    href: "https://twitter.com/justinkan?lang=en",
    name: "Justin Kan",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_justin-kan.png.webp"),
    company: "Goat Capital & Co-founder Twitch"
  },
  {
    href: "https://twitter.com/robinchan",
    name: "Robin Chan",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_robin-chan.png.webp"),
    company: "Founder Goat Capital"
  },
  {
    href: "https://twitter.com/alpackaP",
    name: "Alex Pack",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_alex-pack.png.webp"),
    company: "HACK VC"
  },
  {
    href: "https://twitter.com/hjmomtazi",
    name: "Jordan Momtazi",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_jordan-momtazi.png.webp"),
    company: "Synthetix"
  },
  {
    href: "https://twitter.com/kaiynne",
    name: "Kain Warwick",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_kain-warwick.png.webp"),
    company: "Founder Synthetix"
  },
  {
    href: "https://twitter.com/stablekwon",
    name: "Do Kwon",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_do-kwon.png.webp"),
    company: "Founder Terra",
    skip: true
  },
  {
    href: "https://twitter.com/pmenchov",
    name: "Paul Menchov",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_paul-menchov.png.webp"),
    company: "Co-founder Coinlist"
  },
  {
    href: "https://twitter.com/lukeswagman",
    name: "Luke Wagman",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_luke-wagman.png.webp"),
    company: " Co-founder CoinMarketCap"
  },
  {
    href: "https://twitter.com/elliotrades",
    name: "Elliot Wainman",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_elliot-wainman.png.webp"),
    company: " Co-founder Superfarm"
  },
  {
    href: "https://www.youtube.com/c/ksi/featured",
    name: "KSI",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_ksi.png.webp"),
    company: " Youtuber"
  },
  {
    href: "https://twitter.com/KieranWarwick",
    name: "Kieran Warwick",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_kieran-warwick.png.webp"),
    company: " Co-founder Illuvium"
  },
  {
    href: "https://twitter.com/santiagoroel",
    name: "Santiago R Santos",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_santiago-r-santos.png.webp"),
  },
  {
    href: "https://twitter.com/ZssBecker",
    name: "Alex Becker",
    img: require("../assets/images/investors/optimized/Sin.City_website_backers_alex_becker.png.webp"),
  },
  {
    href: "https://twitter.com/animocabrands",
    name: "Animoca",
    img: require("../assets/images/investors/optimized/animoca.png.webp"),
  },
  {
    href: "http://www.longling.com/?lang=en",
    name: "Longling",
    img: require("../assets/images/investors/optimized/longling.png.webp"),
  },
  {
    href: "https://twitter.com/TheSpartanGroup",
    name: "Spartan Group",
    img: require("../assets/images/investors/optimized/spartangroup.png.webp"),
  },
  {
    href: "https://capitalant.com/",
    name: "A&T",
    img: require("../assets/images/investors/optimized/a&t.png.webp"),
  },
  {
    href: "https://www.hyperedge.capital/",
    name: "Hyperedge",
    img: require("../assets/images/investors/optimized/hyperedge.png.webp"),
  },
  {
    href: "https://shima.capital/",
    name: "Shima Capital",
    img: require("../assets/images/investors/optimized/shimacapital.png.webp"),
  },
  {
    href: "https://www.iangels.com/",
    name: "iAngels",
    img: require("../assets/images/investors/optimized/iangels.png.webp"),
  }
]

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