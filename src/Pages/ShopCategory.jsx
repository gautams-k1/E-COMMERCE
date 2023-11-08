import React, { useContext } from 'react';
import styles from './CSS/ShopCategory.module.css';
import {ShopContext} from '../Context/ShopContext';
import dropdown_icon from '../Componets/Assets/dropdown_icon.png'
import Items from '../Componets/Items/Items';

export default function ShopCategory(props) {
  const {allProduct} = useContext(ShopContext)
  return (
    <div className={styles.shopCategory}>
      <img className={styles.shopcategory_banner} src={props.banner} alt="" />
      <div className={styles.shopcategory_indexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles.shopcategory_sort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.shopCategory_products}>
        {allProduct.map((item,i)=>{
          if(props.category===item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return console.log("null");
          }
        })}
      </div>
      <div className={styles.shopcategory_loadmore}>
        Explore More
      </div>
    </div>
  )
}
