import React from 'react'

// ui
import { IconButton, Button } from '@/ui/buttons'
import SettingsIcon from '@/ui/icons/SettingsIcon'
import AppIcon from '@/ui/icons/AppIcon'

// utils
import palette from '@/utils/palette'

// i18n
import { useI18n } from '@/i18n'

import styles from './SearchForm.module.css'

export default function Controls() {
  const { formatMessage } = useI18n()

  return (
    <div className={styles.controls}>
      <IconButton
        onClick={() => {}}
        icon={<SettingsIcon size={24} color={palette.color.graniteGray} />}
      />
      <IconButton
        onClick={() => {}}
        icon={<AppIcon size={24} color={palette.color.graniteGray} />}
      />
      <Button
        fullWidth
        variant="primary"
        title={formatMessage({ id: 'signin' })}
        onClick={() => {}}
      />
    </div>
  )
}
