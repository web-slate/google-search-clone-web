import React from 'react'

import PropTypes from 'prop-types'

import styles from './Button.module.css'

function Button(props) {
  const { title, variant, onClick } = props

  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'light']),
}

Button.defaultProps = {
  variant: 'light',
}

export default Button
