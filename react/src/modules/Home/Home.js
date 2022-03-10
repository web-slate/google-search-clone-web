import React from 'react'

// block components
import { Header, Footer, Logo } from '@/blocks/Region'
import LanguageSwitcher from '@/blocks/LanguageSwitcher'
import AutoCompleteSearchBox from '@/blocks/AutoCompleteSearchBox'

// styles
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Logo />
      <AutoCompleteSearchBox />
      <LanguageSwitcher />
      <Footer />
    </div>
  )
}

export default Home
