import React from 'react'
import styles from './Items.module.css'
import { Link } from 'react-router-dom'

export default function Items(props) {
  return (
    <div className={styles.Itmes}>
        <Link to={`/product/${props.id}` }><img onClick={window.scrollTo(0 ,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className={styles.item_price}>
            <div className={styles.itmes_price_new}>
                ${props.new_price}
            </div>
            <div className={styles.itmes_price_old}>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
