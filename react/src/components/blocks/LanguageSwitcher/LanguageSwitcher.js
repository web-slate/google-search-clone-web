import React from 'react'

// ui
import Link from '@/ui/Link'

// styles
import styles from './LanguageSwitcher.module.css'

const languages = [
  'हिन्दी',
  'বাংলা',
  'తెలుగు',
  'मराठी',
  'தமிழ்',
  'ગુજરાતી',
  'ಕನ್ನಡ',
  'മലയാളം',
  'ਪੰਜਾਬੀ',
]

function LanguageSwitcher() {
  return (
    <div className={styles.container}>
      <div className={styles.langListContainer}>
        <div className={styles.langList}>
          Google offered in:&nbsp;
          {languages.map((lang) => (
            <Link key={lang} className={styles.langLink} title={lang} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageSwitcher
