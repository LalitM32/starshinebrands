import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Where Elegance Meets Flavor</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Experience a fusion of Mediterranean, European, and Asian cuisines crafted with precision, passion, and sophistication.
      </p>
      <button type="button" className="custom__button app__header-button">Reserve Your Table</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
