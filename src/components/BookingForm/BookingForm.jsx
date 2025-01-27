import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './BookingForm.css';

const BookingForm = ({ onClose }) => {
  const [mode, setMode] = useState('normal'); // 'normal' or 'party'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
    contactMethod: 'Phone', // New field for preferred contact method
    occasion: '', // New field for special occasion
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formActionUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd1A6SSTCNWlO_SKi2MWFQazK2Q4qYvrM1f9eDki0QHdZegSQ/formResponse';

    const queryString = new URLSearchParams({
      'entry.1473221365': formData.name,
      'entry.990148308': formData.phone,
      'entry.981627044': formData.date,
      'entry.666853253': formData.time,
      'entry.2069505594': formData.guests,
      'entry.444142182': formData.message,
      ...(mode === 'party' && {
        'entry.1234567890': formData.contactMethod, // New field for contact method
        'entry.0987654321': formData.occasion, // New field for occasion
      }),
    }).toString();
    window.open(`${formActionUrl}?${queryString}`, '_blank');
    onClose();
  };

  return (
    <div className="app__booking-form flex__center">
      <div className="app__booking-form_content">
        <div className="app__booking-form_header">
          <SubHeading title="Reservations" />
          <h1 className="headtext__cormorant">Book A Table</h1>
        </div>
        <div className="mode-toggle mb-15">
          <div className="button-container">
            <button
              type="button"
              className={`button ${mode === 'normal' ? 'active' : ''} p-2 m-2`}
              onClick={() => setMode('normal')}
            >
              Normal Booking
            </button>
            <button
              type="button"
              className={`button ${mode === 'party' ? 'active' : ''} p-2 m-2`}
              onClick={() => setMode('party')}
            >
              Party Booking
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="app__booking-form_fields">
          <div className="form-row">
            <div className="form-field">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p__opensans"
              />
            </div>
            <div className="form-field">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="p__opensans"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="p__opensans"
              />
            </div>
            <div className="form-field">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="p__opensans"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="p__opensans"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
            {mode === 'party' && (
              <div className="form-field">
                <input
                  type="text"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  placeholder="Special Occasion (optional)"
                  className="p__opensans"
                />
              </div>
            )}
          </div>
          <div className="form-field">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Special Requests"
              className="p__opensans"
            />
          </div>
          <button type="submit" className="custom__button">
            Book Now
          </button>
        </form>
        <button type="button" className="close-btn" onClick={onClose}>
          <span className="p__opensans">×</span>
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
