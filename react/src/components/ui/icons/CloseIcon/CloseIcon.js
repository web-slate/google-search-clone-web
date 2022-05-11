import React from 'react'

import PropTypes from 'prop-types'

function CloseIcon(props) {
  return (
    <span
      style={{
        display: 'block',
        height: props.size,
        width: props.size,
      }}
      className={props.className}
    >
      <svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={props.color}
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
    </span>
  )
}

CloseIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
}

CloseIcon.defaultProps = {
  className: '',
  color: 'black',
  size: 16,
}

export default CloseIcon
