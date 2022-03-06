import React from 'react'

// ui components
import { Header, Footer } from '@/blocks/Region'
import LanguageSwitcher from '@/blocks/LanguageSwitcher'
import SearchForm from '@/blocks/SearchForm'

// styles
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchForm />
      <LanguageSwitcher />
      <Footer />
    </div>
  )
}

export default Home
