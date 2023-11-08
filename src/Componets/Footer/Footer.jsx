import styles from './Footer.module.css';
import React from 'react'
import footer_logo from '../Assets/logo.png'
import instagram_icone from '../Assets/instagram_icon.png';
import pintester_icone from '../Assets/pintester_icon.png';
import whatsaap_icone from '../Assets/whatsapp_icon.png';

export default function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.footer_logo}>
            <img src={footer_logo} alt="footer" />
            <p>LuxeWard</p>
        </div>
        <ul className={styles.footer_links}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className={styles.Footer_social_icons}>
            <div className={styles.Footer_icone_container}>
                <img src={instagram_icone} alt="" />
            </div>
            <div className={styles.Footer_icone_container}>
                <img src={pintester_icone} alt="" />
            </div>
            <div className={styles.Footer_icone_container}>
                <img src={whatsaap_icone} alt="" />
            </div>
        </div>
            <div className={styles.Footer_copywright}>
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
    </div>
  )
}
