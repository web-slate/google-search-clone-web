import React from 'react'

// ui components
import { Header, Footer } from '@/blocks/Region'

// styles
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  )
}

export default Home
