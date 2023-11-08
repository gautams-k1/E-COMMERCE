import React from 'react';
import styles from './CSS/LoginSignup.module.css'

export default function LoginSignup() {
  return (
    <div className={styles.LoginSignup}>
        <div className={styles.LoginSignup_container}>
          <h1>Sign Up</h1>
          <div className={styles.LoginSignup_fields}>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className={styles.LoginSignup_login}>Already have an account? <span>Login here</span></p>
          <div className={styles.LoginSignup_agree}>
            <input type="checkbox" name='' id='' />
            <p>By continuing, iagree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}
