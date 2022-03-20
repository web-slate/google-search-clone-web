import React from 'react'

// ui
import { IconButton, Button } from '@/ui/buttons'
import AppIcon from '@/ui/icons/AppIcon'
import Link from '@/ui/Link'

// i18n
import { useI18n } from '@/i18n'

// utils
import Palette from '@/utils/palette'

import styles from './RightMenu.module.css'

function RightMenu() {
  const { formatMessage } = useI18n()

  return (
    <div className={styles.rightSection}>
      <div className={styles.links}>
        <Link variant="dark" title={formatMessage({ id: 'gmail' })} />
        <Link variant="dark" title={formatMessage({ id: 'images' })} />
      </div>
      <div className={styles.appIcon}>
        <IconButton
          onClick={(event) => event.preventDefault() }
          icon={<AppIcon size={24} color={Palette.color.graniteGray} />}
        />
      </div>
      <div className={styles.signIn}>
        <Button
          fullWidth
          variant="primary"
          title={formatMessage({ id: 'signin' })}
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default RightMenu
