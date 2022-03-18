import React from 'react'
import PropTypes from 'prop-types'

// component
import ResultListItem from './ResultListItem'

// styles
import styles from './ResultList.module.css'

function ResultList(props) {
  const { query, data = [] } = props

  return (
    <div className={styles.container}>
      <div className={styles.resultPage}>
        <div className={styles.resultCount}>
          About {data.length} results
          <nobr> (0.61 seconds)&nbsp;</nobr>
        </div>
        {data.map((item) => (
          <ResultListItem
            key={item.title}
            query={query}
            item={{
              title: item.title,
              description: item.content,
              link: item.url,
            }}
          />
        ))}
      </div>
    </div>
  )
}

ResultList.propTypes = {
  query: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

export default ResultList
