import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import BookingForm from '../BookingForm/BookingForm';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (currentScrollY / totalHeight) * 100;

    setScrollProgress(progress);
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100); // Show if scrolling up or at the top
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`app__navbar ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#awards">Awards</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="/login" className="p__opensans">Log In / Registration</a>
          <div />
          <a href="/" className="p__opensans" onClick={(e) => { e.preventDefault(); setShowBookingForm(true); setToggleMenu(false); }}>Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#4A4A4A" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)} className="p__opensans">Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)} className="p__opensans">About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)} className="p__opensans">Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)} className="p__opensans">Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)} className="p__opensans">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {showBookingForm && (
        <BookingForm onClose={() => setShowBookingForm(false)} />
      )}
    </>
  );
};

export default Navbar;
