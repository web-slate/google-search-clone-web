import React from 'react'
import PropTypes from 'prop-types'

// styles
import styles from './ResultListItem.module.css'

function ResultListItem(prop) {
  const { query, item = {} } = prop

  const { description = '', title = '', link = '' } = item || {}

  const desc = description.split(query)

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {link && (
          <div className={styles.linkContainer}>
            <div className={styles.linkContent}>
              <a href={link}>
                <div className={styles.link}>{link}</div>
                {title && <h3>{title}</h3>}
              </a>
            </div>
          </div>
        )}
        {item.description && (
          <div className={styles.descContainer}>
            <div>
              <span>
                {desc[0]}
                <b>{query}</b>
                {desc[1]}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

ResultListItem.propTypes = {
  query: PropTypes.string.isRequired,
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

export default ResultListItem
