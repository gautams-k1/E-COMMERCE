import { ShopContext } from '../../Context/ShopContext';
import styles from './CartItems.module.css';
import React, { useContext } from 'react'
import remove_icone from '../Assets/cart_cross_icon.png'

export default function CartItems() {
  
    const {getTotleCart, allProduct,cartItems,removetoCart} = useContext(ShopContext)

    return (
    <div className={styles.cartItems}>
        <div className={styles.cartItems_format}>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {allProduct.map((e)=>{
            if (cartItems[e.id] > 0) {
                return <div>
                    <div className={`${styles.cartItems_format} ${styles.cartitmes_formet_main}`}>
                        <img src={e.image} alt="" className={styles.cartitmes_product_icone} />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className={styles.cartitmes_quantity}>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className={styles.cartitems_remove_icone} src={remove_icone} onClick={()=>{removetoCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
            }
            return null;
        })}
        <div className={styles.cartitems_down}>
            <div className={styles.cartitems_tottle}>
                <h1>cart totals</h1>
                <div>
                    <div className={styles.cartitems_total_item}>
                        <p>Submit</p>
                        <p>${getTotleCart()}</p>
                    </div>
                    <hr />
                    <div className={styles.cartitems_total_item}>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className={styles.cartitems_total_item}>
                        <h3>Total</h3>
                        <h3>${getTotleCart()}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
                <div className={styles.cartitems_promocode}>
                    <p>If you have a promo code, enter it hear</p>
                    <div className={styles.cartitems_propmobox}>
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
        </div>
    </div>
  )
}
