import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Blending tradition with innovation, the culinary creations captivate both the palate and the eye.</p>
        </div>
        <p className="p__opensans"> Globally celebrated for mastering 18 cuisines, Chef Akshat’s creations blend tradition with innovation. His signature Exquisite Savory Mousse Cocktails and stunning presentations make every dish unforgettable. </p>
      </div>

      <div className="app__chef-sign">
        <p>Akshat Parihar</p>
        <p className="p__opensans">Chef & Brand Ambassador</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
