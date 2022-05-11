import React from 'react'

import PropTypes from 'prop-types'

import styles from './IconButton.module.css'

function IconButton(props) {
  return (
    <div className={styles.iconButtonContainer}>
      <a
        className={styles.iconButton}
        aria-label={props.label}
        href="#"
        role="button"
        onClick={props.onClick}
      >
        {props.icon}
      </a>
    </div>
  )
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
}

IconButton.defaultProps = {
  label: '',
}

export default IconButton
