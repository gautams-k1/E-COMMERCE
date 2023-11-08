import styles from './NewsLatter.module.css';

import React from 'react'

export default function NewsLatter() {
  return (
    <div className={styles.NewsLetter}>
        <h1>Get Exclusive Offers on your email</h1>
        <p>Subscribe to our newsletter and stay update</p>
        <div>
            <input type="email" placeholder='your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
