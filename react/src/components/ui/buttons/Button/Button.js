import React from 'react'

import PropTypes from 'prop-types'

import styles from './Button.module.css'

function Button(props) {
  const { title, variant, fullWidth, className, onClick } = props

  const style = {}

  if (fullWidth) {
    style.width = '100%'
  }

  return (
    <button
      style={style}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'light']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  variant: 'light',
  fullWidth: false,
  className: '',
}

export default Button
