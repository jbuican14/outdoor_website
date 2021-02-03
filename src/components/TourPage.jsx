import React from 'react';

const TourPage = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-buttom-big">
        <h2 className="heading-secondary">Most popular tour</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">Card FRONT</div>
            <div className="card__side card__side--back">Card BACK !!! </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">Card FRONT</div>
            <div className="card__side card__side--back">Card BACK !!!</div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">Card FRONT</div>
            <div className="card__side card__side--back">Card BACK !!!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPage;
