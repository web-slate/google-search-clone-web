import React from 'react'

// ui
import { IconButton, Button } from '@/ui/buttons'
import AppIcon from '@/ui/icons/AppIcon'
import Link from '@/ui/Link'

// utils
import Palette from '@/utils/palette'

import styles from './RightMenu.module.css'

function RightMenu() {
  return (
    <div className={styles.rightSection}>
      <div className={styles.links}>
        <Link variant="dark" title="Gmail" />
        <Link variant="dark" title="Images" />
      </div>
      <div className={styles.appIcon}>
        <IconButton
          icon={<AppIcon size={24} color={Palette.color.graniteGray} />}
        />
      </div>
      <div className={styles.signIn}>
        <Button fullWidth variant="primary" title="Sign in" />
      </div>
    </div>
  )
}

export default RightMenu
