import React from 'react'
import PropTypes from 'prop-types'

import styles from './Link.module.css'

function Link(props) {
  const { variant, ...anchorProps } = props

  return (
    <a className={`${styles.link} ${styles[variant]}`} {...anchorProps}>
      {props.title}
    </a>
  )
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'dark']),
}

Link.defaultProps = {
  variant: 'primary',
}

export default Link
