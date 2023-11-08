import styles from './DiscriptionBox.module.css';
import React from 'react'

export default function DiscriptionBox() {
  return (
    <div className={styles.DiscriptionBox}>
      <div className={styles.DiscriptionBox_nevigator}>
        <div className={styles.DiscriptionBox_nav_box}>Discription</div>
        <div className={`${styles.DiscriptionBox_nav_fade} ${styles.DiscriptionBox_nav_box}`  }>Revies (122)</div>
      </div>
      <div className={styles.DiscriptionBox_discription}>
        <p>Welcome to our online clothing site, where fashion meets convenience. We offer a curated collection of clothing for every style and occasion. Discover the latest trends in men's, women's, and children's fashion, featuring a variety of brands and styles, from casual to formal wear. Our user-friendly website makes shopping a breeze, with detailed product descriptions, sizing guides, and secure checkout. Enjoy exclusive deals, frequent updates, and a hassle-free return policy for your peace of mind. With fast and reliable shipping, we ensure you receive your favorite clothing items promptly. Join our fashion community today and redefine your wardrobe with ease.</p>
        <p>Introducing our stylish and versatile jacket, a must-have for your wardrobe. Crafted from high-quality materials, it offers both warmth and style. Available in a range of classic and contemporary colors, this jacket is perfect for any season. Whether you're heading to the office or a weekend adventure, our jacket has you covered.</p>
      </div>

    </div>
  )
}
