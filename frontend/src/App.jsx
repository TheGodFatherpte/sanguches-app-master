import React from 'react';
import { CTA, Combo, Favorites, Footer, Hero, Navbar, Products, Promotions, Testimonials } from './components';
/* import Commerce from './lib/commerce'; */
import styles from './style';
const App = () => {
  /* uncomment when using commerce.js
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
      const { data } = await Commerce.products.list();
      setProducts(response.data);
    };
  
    useEffect(() => {//hook
      fetchProducts();
    }, []);
  
    console.log(products); 
  const [cart, setCart] = useState({});
  const fetchCart = async () => {
    setCart(await Commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);
   */   

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar totalItems={2} />


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
  )
}

export default App;