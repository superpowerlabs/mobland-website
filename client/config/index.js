import abi from "./ABI.json";
let isDev;
if (typeof window !== "undefined") {
  isDev = /localhost/.test(window.location.hostname);
} else if (typeof process !== undefined && process.env) {
  isDev = process.env.NODE_ENV === "development";
}

const supportedId = {
  1: "Ethereum Mainnet",
};

if (isDev) {
  supportedId[1337] = "Local EVM";
  // supportedId[42] = "Kovan";
}

const config = {
  supportedId,
  abi: abi,
  season: 2,
  contracts: {
    42: "0x6d3cf40fe8649947f5fddfedc910b9bb09652ba7",
    //42: "0x0f65a9629ae856a6fe3e8292fba577f478b944e0",
    // 1: ""
  },
  isSynCity: /syn.city/.test(window.location.origin),
};

export default config;
