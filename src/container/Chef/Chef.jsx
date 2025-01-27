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
          <p className="p__opensans">Blending Tradition with Innovation, Culinary Creations Captivate Both the Palate and the Eye.</p>
        </div>
        <p className="p__opensans">Akshat Parihar—globally acclaimed Celebrity Chef & Hotelier—redefines gastronomy through trendsetting hospitality and mastery of 18+ cuisines. Pioneer of Exquisite Savoury Mousse Cocktails, he merges heritage techniques with modern flair, reimagining Indian cuisine for global palates.</p>
      </div>

      <div className="app__chef-sign">
        <p>Akshat Parihar</p>
        <p className="p__opensans">Celebrity Chef & Brand Ambassador</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
