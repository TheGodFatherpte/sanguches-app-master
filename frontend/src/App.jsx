import React from 'react';
import { CTA, Combo, Favorites, Footer, Hero, Navbar, Promotions, Testimonials } from './components';
import Products from './components/Products/Products.jsx';
import styles from './style';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Favorites />
        <Products />
        <Promotions />
        <Combo />
        <CTA />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;