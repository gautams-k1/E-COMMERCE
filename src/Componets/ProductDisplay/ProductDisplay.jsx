import styles from './ProductDisplay.module.css';
import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
  
    const {product} = props;
    const {addtoCart} = useContext(ShopContext)


    return (
    <div className={styles.productDisplay}>
      <div className={styles.productDisplay_left}>
        `<div className={styles.productDisplay_list_img}>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className={styles.productDisplay_img}>
        <img className={styles.productDisplay_main_img} src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.productDisplay_right}>
        <h1>{product.name}</h1>
        <div className={styles.productDisplay_right_stars}>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
        </div>
        <p>(122)</p>
     
      <div className={styles.product_display_right_price}>
        <div  className={styles.product_display_right_price_old}>${product.old_price}</div>
        <div  className={styles.product_display_right_price_new}>${product.new_price}</div>
      </div>
      <div className={styles.productDisplay_right_dics}>
      Introducing our stylish and versatile jacket, a must-have for your wardrobe. Crafted from high-quality materials, it offers both warmth and style. Available in a range of classic and contemporary colors, this jacket is perfect for any season. Whether you're heading to the office or a weekend adventure, our jacket has you covered.
      </div>
      <div className={styles.productDisplay_right_size}>
        <h1>Select Size</h1>
        <div className={styles.productDisplay_right_sizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
      </div>
      <button onClick={()=>{addtoCart(product.id)}}>Add To Cart</button>
      <p className={styles.productDisplay_right_categoty}><span>Category :</span>Men , T-Shirt, FullSleevs</p>
      <p className={styles.productDisplay_right_categoty}><span>Tegs :</span>Morden, Latest</p>
      </div>
    </div>
  )
}
