import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./investors.scss";
export default function Investor() {
  return (
    <div>
      <div className="investor-hero-container">
        <h1 className="investor-title">Investor Relations</h1>
        <p>
          Stay informed with the latest news, attend webcasts, and follow the
          performance of Bamboos Healthcare Holdings Limited stock.
        </p>
      </div>
      <section className="investor-section-two">
        <div className="section-two-investor-container">
          <div className="section-two-investor-detail">
            <h1>We're creating a new way of working</h1>
            <p>
              Bamboos is a leading healthcare platform that's transforming th
              way people and teams work together. We're on a mission to unleash
              the world's creative energy by desgining a more enlightened way of
              working
            </p>
          </div>
          <div className="stock-container">
            <h1>Bamboos Stock</h1>
            <h3>Price: $XX.XX</h3>
            <h3>Change: X.XX%</h3>
            <h3>Volume: X,XXX,XXX</h3>
          </div>
        </div>
      </section>
      <section className="investor-section-three">
        <div className="section-three-investor-container">
          <div className="investor-stat-container">
            <h1>$X,XXX,XXX</h1>
            <h3>2021 revenue</h3>
          </div>
          <div className="investor-stat-container">
            <h1>XXX,XXX</h1>
            <h3>registered users</h3>
          </div>
          <div className="investor-stat-container">
            <h1>XX,XXX</h1>
            <h3>healthcare personnel</h3>
          </div>
        </div>
      </section>
      <section className="investor-section-four">
        <div className="section-four-investor-container">
          <h1>News releases</h1>
          <p>
            Click the items below to see our most recent press releases. For
            more company news please <a href="wip">visit our newsroom</a>
          </p>
          <div className="news-container">
            <h2 className="news-title">
              Example news title Quarter 2021 Earnings Result
            </h2>
            <p className="news-content">
              Example news content announced today make report fiancnial results
              first quarter ended this day 2021 after market close on this date.
              Company will also hold a conference call on same day at this time.
              Fourth Quarter revenue up this percentage from last year. Other
              news etc.
            </p>
          </div>
          <div className="news-container">
            <h2 className="news-title">
              Example news title Quarter 2021 Earnings Result
            </h2>
            <p className="news-content">
              Example news content announced today make report fiancnial results
              first quarter ended this day 2021 after market close on this date.
              Company will also hold a conference call on same day at this time.
              Fourth Quarter revenue up this percentage from last year. Other
              news etc.
            </p>
          </div>
          <div className="news-container">
            <h2 className="news-title">
              Example news title Quarter 2021 Earnings Result
            </h2>
            <p className="news-content">
              Example news content announced today make report fiancnial results
              first quarter ended this day 2021 after market close on this date.
              Company will also hold a conference call on same day at this time.
              Fourth Quarter revenue up this percentage from last year. Other
              news etc.
            </p>
          </div>
        </div>
      </section>
      <section className="last-section-investors">
        <div className="last-section-banner-investors">
          <h1>Join us today in working towards a better tomorrow</h1>
          <a href="contact" className="contact-button-investors">
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
}
