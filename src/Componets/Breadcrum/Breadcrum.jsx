import styles from './Breadcrum.module.css';
import arrow_icone from '../Assets/arrow.png'

import React from 'react'

export default function Breadcrum(props) {
  
    const {product} = props

    return (
    <div className={styles.Breadcrum}>
        HOME <img src={arrow_icone} alt="" /> SHOP <img src={arrow_icone} alt="" /> {product.category} <img src={arrow_icone} alt="" /> <div className={styles.produnt_name}>{product.name}</div>
    </div>
  )
}
