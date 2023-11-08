import styles from './RelatedProducts.module.css';
import React from 'react'
import data_product from '../Assets/data'
import Items from '../Items/Items'

export default function RelatedProduct() {
  return (
    <div className={styles.RelatedProduct}>
      <h1>Related Product</h1>
      <hr />
      <div className={styles.RelatedProduct_item}>
            {data_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>
    </div>
  )
}
