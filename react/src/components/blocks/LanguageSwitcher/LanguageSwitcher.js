import React from 'react'
// i18n
import { useI18n } from '@/i18n'

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
  const { formatMessage } = useI18n()
  return (
    <div className={styles.container}>
      <div className={styles.langListContainer}>
        <div className={styles.langList}>
          {formatMessage({ id: 'googleofferedin' })}:&nbsp;
          {languages.map((lang) => (
            <Link key={lang} className={styles.langLink} title={lang} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageSwitcher
