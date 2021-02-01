import React from 'react';

import Button from './Buttons';
import nat1 from '../img/nat-1-large.jpg';
import nat2 from '../img/nat-2-large.jpg';
import nat3 from '../img/nat-3-large.jpg';

const AboutPage = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, odio possimus quis molestias assumenda omnis illum
              fuga nisi iure cum amet fugiat ut temporibus quae saepe! Similique
              dolores aut praesentium.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventurous
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, odio possimus quis molestias assumenda omnis illum
              fuga nisi iure cum amet fugiat ut temporibus quae saepe! Similique
              dolores aut praesentium.
            </p>

            <Button />
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nat1}
                alt=" natural 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={nat2}
                alt=" natural 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={nat3}
                alt=" natural 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
