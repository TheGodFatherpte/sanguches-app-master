import React from 'react';
import { CTA, Combo, Favorites, Footer, Hero, Navbar, Promotions } from './components';
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
        <Promotions />
        <Combo />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;