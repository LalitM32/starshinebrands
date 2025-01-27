import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Aviaryy is elegance redefined. A harmonious blend of Mediterranean, European, and Asian flavors, we deliver a sophisticated dining experience inspired by rich culinary traditions and modern innovation.
        </p>
        <button type="button" className="custom__button text-right">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          From its roots as &ldquo;Aviaryy,&rdquo; Ivoryy has grown into a symbol of luxury dining. Known for its timeless charm, our vibrant menu and impeccable service set new standards for refined taste.
        </p>
        <button type="button" className="custom__button text-right">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
