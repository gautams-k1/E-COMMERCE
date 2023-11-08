import React from 'react';
import styles from './Hero.module.css';
import hand_icone from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png'

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_left}>
            <h2>New Arivals Only</h2>
            <div className={styles.hand_hand_icone}>
                <p>New</p>
                <img src={hand_icone} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className={styles.hero_latest_btn}>
                <div>latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className={styles.hero_right}>
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero
