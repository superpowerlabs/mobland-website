import React from "react";
// import { Modal, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ethers } from "ethers";
import ls from "local-storage";
import Common from "./Common";
import clientApi from "../utils/ClientApi";
import config from "../config";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Error404 from "./Error404";
import CallToAction from "./CallToAction";

// import Team from "./Team";

class App extends Common {
  constructor(props) {
    super(props);

    let localStore = JSON.parse(ls("localStore") || "{}");
    let pathhash = ethers.utils.id(window.location.pathname);

    if (/mobland/.test(window.location.origin)) {
      window.location = "https://mob.land";
    } else if (
      !/local/.test(location.origin) &&
      window.location.protocol === "http:"
    ) {
      window.location = location.href.replace(/^http:/, "https:");
    }

    this.state = {
      Store: Object.assign(
        {
          content: {},
          editing: {},
          temp: {},
          menuVisibility: false,
          config,
          width: this.getWidth(),
          pathname: window.location.pathname,
          showModal: true,
          modalTitle: "FARM AND TURF SALE!",
          modalMessage:
            "Start your path to becoming a virtual kingpin by generating SEED and BUD! Get all you need in the upcoming Turf and Farm sale!",
          onConfirm: () => {
            // Add method here
          },
          confirmButtonText: "Learn More",
        },
        localStore
      ),
      pathhash,
    };

    this.bindMany([
      "handleClose",
      "handleShow",
      "setStore",
      "updateDimensions",
      "showModal",
      "setWallet",
      "connect",
    ]);
  }

  getWidth() {
    return window.innerWidth;
  }

  updateDimensions() {
    this.setStore({
      width: this.getWidth(),
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  async componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    // if (this.state.Store.connectedWith) {
    //   this.connect();
    // }
  }

  async connect() {
    if (typeof window.ethereum !== "undefined") {
      let eth = window.ethereum;
      if (await eth.request({ method: "eth_requestAccounts" })) {
        eth.on("accountsChanged", () => window.location.reload());
        eth.on("chainChanged", () => window.location.reload());
        eth.on("disconnect", () => window.location.reload());
        this.setWallet(eth, "metamask");
      }
    }
  }

  async switchTo(chainId, chainName, symbol, rpcUrls) {
    if (window.clover !== undefined) {
      const provider = window.clover;
      try {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId,
              chainName,
              nativeCurrency: {
                symbol,
                decimals: 18,
              },
              rpcUrls: [rpcUrls],
            },
          ],
        });
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }

  // chainId: '0x3',
  // chainName: 'Ropsten',
  // nativeCurrency: {
  //   symbol: 'RETH',
  //   decimals: 18,
  // },
  // rpcUrls: ['https://ropsten.infura.io/v3/your_key'],

  async setWallet(eth, connectedWith) {
    try {
      const provider = new ethers.providers.Web3Provider(eth);
      const signer = provider.getSigner();
      const chainId = (await provider.getNetwork()).chainId;
      const connectedWallet = await signer.getAddress();
      let networkNotSupported = false;
      let connectedNetwork = null;
      if (config.supportedId[chainId]) {
        connectedNetwork = config.supportedId[chainId];
      } else {
        networkNotSupported = true;
      }
      this.setStore({
        provider,
        signer,
        connectedWallet,
        chainId,
        connectedNetwork,
        networkNotSupported,
      });
      this.setStore(
        {
          connectedWith,
        },
        true
      );
      clientApi.setConnectedWallet(connectedWallet, chainId);
    } catch (e) {
      console.error(e);
      // window.location.reload()
    }
  }

  showModal(modalTitle, modalMessage, onConfirm, confirmButtonText) {
    this.setStore({
      modalTitle,
      modalMessage,
      onConfirm,
      confirmButtonText,
      showModal: true,
    });
  }

  setStore(newProps, storeItLocally) {
    let store = this.state.Store;
    let localStore = JSON.parse(ls("localStore") || "{}");
    let saveLocalStore = false;
    for (let i in newProps) {
      if (newProps[i] === null) {
        if (storeItLocally) {
          delete localStore[i];
          saveLocalStore = true;
        }
        delete store[i];
      } else {
        if (storeItLocally) {
          localStore[i] = newProps[i];
          saveLocalStore = true;
        }
        store[i] = newProps[i];
      }
    }
    this.setState({
      Store: store,
    });
    if (saveLocalStore) {
      ls("localStore", JSON.stringify(localStore));
    }
  }

  render() {
    const Store = this.state.Store;
    return (
      <BrowserRouter>
        {Store.loaded ? (
          <Header
            Store={Store}
            setStore={this.setStore}
            connect={this.connect}
          />
        ) : null}
        <main>
          {Store.loaded && Store.showModal ? (
            <CallToAction
              title={Store.modalTitle}
              message={Store.modalMessage}
              confirmButtonText={Store.confirmButtonText}
              onConfirm={() => {
                Store.onConfirm();
                this.setStore({ showModal: false });
              }}
              onClose={() => {
                this.setStore({ showModal: false });
              }}
            />
          ) : null}

          <Switch>
            <Route exact path="/">
              <LandingPage Store={Store} setStore={this.setStore} />
            </Route>
            {/* <Route exact path="/team">
              <Team Store={Store} setStore={this.setStore} />
            </Route> */}
            <Route exact path="*">
              <Error404 Store={Store} setStore={this.setStore} />
            </Route>
          </Switch>
          {/*<Footer/>*/}
        </main>
        {Store.loaded ? (
          <Footer Store={Store} setStore={this.setStore} />
        ) : null}
      </BrowserRouter>
    );
  }
}

module.exports = App;
