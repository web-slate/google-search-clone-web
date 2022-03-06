import React from 'react'
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          alt="google-logo"
          src="/images/google_logo.png"
          className={styles.logo}
        />
      </div>
    </div>
  )
}

export default Logo
