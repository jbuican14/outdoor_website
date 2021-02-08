import React from 'react';

import nat5 from '../img/nat-5.jpg';
import nat6 from '../img/nat-6.jpg';
import nat7 from '../img/nat-7.jpg';

const TourPage = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tour</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div
                className="card__picture"
                style={{
                  backgroundImage: `linear-gradient(to right bottom, rgba(175, 236, 164, 0.5), rgba(88, 163, 138, 0.5)), url(${nat5})`,
                }}
              >
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Sea Explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li> 3 days tours</li>
                  <li> Up to 30 people</li>
                  <li> 2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">£300</p>
                </div>
                <button className="btn btn--white">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div
                className="card__picture"
                style={{
                  backgroundImage: `linear-gradient(to right bottom, rgba(175, 236, 164, 0.5), rgba(88, 163, 138, 0.5)),url(${nat6})`,
                }}
              >
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Forest Hiker
                </span>
              </h4>
              <div className="card__details ">
                <ul>
                  <li> 7 days tours</li>
                  <li> Up to 40 people</li>
                  <li> 6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">£500</p>
                </div>
                <button className="btn btn--white">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div
                className="card__picture"
                style={{
                  backgroundImage: `linear-gradient(to right bottom, rgba(175, 236, 164, 0.5), rgba(88, 163, 138, 0.5)),url(${nat7})`,
                }}
              >
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Snow Adventurer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li> 5 days tours</li>
                  <li> Up to 15 people</li>
                  <li> 3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">£600</p>
                </div>
                <button className="btn btn--white">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <button className="btn btn--green">Discover all tours</button>
      </div>
    </section>
  );
};

export default TourPage;
