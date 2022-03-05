import React from 'react'
import PropTypes from 'prop-types'

import styles from './Link.module.css'

function Link(props) {
  const { variant, className, ...anchorProps } = props

  return (
    <a
      className={`${styles.link} ${styles[variant]} ${className}`}
      {...anchorProps}
    >
      {props.title}
    </a>
  )
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'dark', 'light']),
  className: PropTypes.string,
}

Link.defaultProps = {
  variant: 'primary',
  className: '',
}

export default Link
