import React from "react";
import headerImaage from "../styles/images/header-img.png";
import { FaHeart, FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

class Main extends React.Component {
  render() {
    return (
      <div className="all">
        <div className="main">
          <div className="navbar">
            <div className="icon">
              <div className="logo"></div>
              <div className="text">MekaVerse</div>
            </div>
            <div className="social-media-container">
              <a href="https://www.google.com/" className="social_media">
                <BsTwitter />
              </a>
              <a href="https://www.google.com/" className="social_media">
                <FaHeart />
              </a>
              <a href="https://www.google.com/" className="social_media">
                <FaDiscord />
              </a>
              <a href="https://www.google.com/" className="wallet">
                Connect Wallet
              </a>
            </div>
          </div>

          <div className="img-container">
            <button>View on Opensea</button>
            <img src={headerImaage} alt="Header-img" />
          </div>
        </div>
        <div className="sec-page">
          <div className="mr-rt"></div>
          <div className="description">
            <span className="head-num">8,888 unique Mekas</span>
            <p className="head-desc">who need Drivers.</p>
            <p className="rest">
              The MekaVerse is a collection of 8,888 generative Mekas with
              hundreds of elements inspired by the Japan Mecha universes.
              <br />
              <br />
              Each artwork is original, with its own color palette and creation.
              The objective was to make each Meka unique in order to prioritize
              quality above quantity.
            </p>
          </div>
          <div className="image"></div>
          <div className="mr-rt"></div>
        </div>
      </div>
    );
  }
}

export default Main;
