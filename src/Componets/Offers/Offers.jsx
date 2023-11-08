import styles from './Offers.module.css';
import exculsive_img from "../Assets/exclusive_image.png"

import React from 'react'

export default function Offers() {
  return (
    <div className={styles.Offers}>
      <div className={styles.offers_left}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on THE best sellers products</p>
        <button>check now</button>
      </div>
      <div className={styles.offers_right}>
        <img src={exculsive_img} alt="" />
      </div>
    </div>
  )
}
