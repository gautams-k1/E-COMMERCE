import styles from './NewCollection.module.css';
import React from 'react'
import new_collections from '../Assets/new_collections';
import Items from '../Items/Items';
 
export default function NewCollections() {
   return (
     <div className={styles.NewCollection}>
        <h1>New Collections</h1>
        <hr />
        <div className={styles.collections}>
            {new_collections.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
     </div>
   )
 }
 