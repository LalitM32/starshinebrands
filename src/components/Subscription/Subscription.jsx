import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Subscription.css';

const SubscriptionCard = ({ tier, price, perks, isPopular }) => (
  <div className={`app__subscription-card ${isPopular ? 'popular' : ''}`}>
    {isPopular && <div className="popular-badge">Most Popular</div>}
    <h2 className="headtext__cormorant subscription-tier">{tier}</h2>
    <div className="subscription-price">
      <span className="price-currency">$</span>
      <span className="price-amount">{price}</span>
      <span className="price-period">/mo</span>
    </div>
    <ul className="subscription-perks">
      {perks.map((perk, index) => (
        <li key={index} className="p__opensans perk-item">
          <span className="perk-checkmark">✦</span>
          {perk}
        </li>
      ))}
    </ul>
    <button type="button" className="custom__button subscription-button">
      Join Now
    </button>
  </div>
);

const Subscription = () => {
  const subscriptionTiers = [
    {
      tier: 'Starter',
      price: '49',
      perks: [
        'Skip the Wait List',
        '10% Off All Meals',
        'Welcome Drink',
        'Monthly Special',
        'VIP Newsletter',
        'Seasonal Gifts',
      ],
    },
    {
      tier: 'Premium',
      price: '99',
      perks: [
        'All Starter Benefits',
        '25% Off All Meals',
        'Free Wine Pairing',
        'Chef Classes',
        'Private Room Access',
        'Birthday Package',
      ],
      isPopular: true,
    },
    {
      tier: 'Elite',
      price: '199',
      perks: [
        'All Premium Benefits',
        '40% Off All Meals',
        'Private Chef Night',
        'VIP Events',
        'Custom Menu',
        'Wine Cellar Access',
      ],
    },
  ];

  return (
    <div className="app__subscription section__padding" id="subscription">
      <div className="app__subscription-title">
        <SubHeading title="Member Privileges" />
        <h1 className="headtext__cormorant">Elevate Your Experience</h1>
      </div>
      <div className="app__subscription-plans">
        {subscriptionTiers.map((tier, index) => (
          <SubscriptionCard
            key={index}
            tier={tier.tier}
            price={tier.price}
            perks={tier.perks}
            isPopular={tier.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
