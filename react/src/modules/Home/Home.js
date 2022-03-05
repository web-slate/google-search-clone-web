import React from 'react'

// ui components
import { Header } from '@/blocks/Region'

// styles
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default Home
