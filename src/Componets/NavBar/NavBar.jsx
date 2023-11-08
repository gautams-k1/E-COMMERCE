import React, { useContext, useState, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Mobi_menu from '../Assets/menu.png'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import offer from '../Assets/offer.webp'
import back_icone from '../Assets/back.png'
import { ShopContext } from '../../Context/ShopContext';

export default function NavBar() {
    
    const [menu, setmenu] = useState('shop')
    // const [isCart, setCart] = useState(false)
    const {getTotalCartitems} = useContext(ShopContext);
    const location = useLocation();
    const isCart = (location.pathname === '/cart' ||/\/product\/\d+/.test(location.pathname)) && window.innerWidth < 841
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
    let goBack = () =>{
        window.history.back();
    } 
    useEffect(()=>{
        
        let hendler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('mousedown',hendler)
    },[])
    

    return (
    <div className={styles.NavBar}>
        <div className={`${styles.Mobi_nav_menu} ${isMenuOpen ? styles.mobiOverlay : ''}`}>
            <div>
                {isCart ? (
                    <img className={styles.back_img} src={back_icone} alt="" onClick={() => goBack()} />
                    ) : (
                        <img className={styles.Mobi_nav_menu_img} src={Mobi_menu} alt="" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}/>
                    )
                }
                
            </div>
            <div className={`${styles.mobi_menu} ${isMenuOpen ? styles.mobi_menu_active : ''}`}ref={menuRef} >
                <img src={offer} alt="" />
                <ul className={styles.mobi_nav_menu_ul} onClick={()=>{setIsMenuOpen(false)}}>
                    <li onClick={() => { setmenu('shop') }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
                    <li onClick={() => { setmenu('men') }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/mens'>men</Link>{menu === 'men' ? <hr /> : <></>}</li>
                    <li onClick={() => { setmenu('women') }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/womans'>women</Link>{menu === 'women' ? <hr /> : <></>}</li>
                    <li onClick={() => { setmenu('kids') }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/kids'>kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
                </ul>
                <hr className={styles.ul_hr} />
                <ul className={styles.mobi_menu_extras}>
                    <li>Shopers Studio</li>
                    <li>Shopers Mall</li>
                    <li>Gift Card</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                </ul>
            </div>  
        </div>
        <div className={styles.windowsNav}>
        <div className={styles.nav_logo}>
            <img src={logo} alt="logo" />
            <p>LuxeWard</p>
        </div>
        <ul className={styles.nav_menu}>
            <li onClick={()=>{setmenu('shop')}}><Link style={{textDecoration:'none',color:'#626262'}} to='/'>shop</Link>{menu==='shop'? <hr/> : <></>}</li>
            <li onClick={()=>{setmenu('men')}}><Link style={{textDecoration:'none',color:'#626262'}} to='/mens'>men</Link>{menu==='men'? <hr/> : <></>}</li>
            <li onClick={()=>{setmenu('women')}}><Link style={{textDecoration:'none',color:'#626262'}} to='/womans'>women</Link>{menu==='women'? <hr/> : <></>}</li>
            <li onClick={()=>{setmenu('kids')}}><Link style={{textDecoration:'none',color:'#626262'}} to='/kids'>kids</Link>{menu==='kids'? <hr/> : <></>}</li>
        </ul>
        <div className={styles.nav_login_cart}>
            <Link to='/login'><button>login</button></Link>
            <Link to='/cart'><img className={styles.cart_img} src={cart_icon} alt="cart_icon" /><div className={styles.nav_cart_count}>{getTotalCartitems()}</div></Link>
            
        </div>
        </div>
    </div>
  )
}
