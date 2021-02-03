import React from 'react';

import heroHeader from '../img/nat-4.jpg';

const FeaturesPage = () => {
  return (
    <section
      className="section-features"
      style={{
        background: `linear-gradient(to right, rgba(175, 236, 164, 0.5), rgba(88, 163, 138, 0.5)), url(${heroHeader})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, molestias architecto eos eveniet recusandae accusantium
              maiores
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet nature
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, molestias architecto eos eveniet recusandae accusantium
              maiores
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find a way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, molestias architecto eos eveniet recusandae accusantium
              maiores
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live a healthier life
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, molestias architecto eos eveniet recusandae accusantium
              maiores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
