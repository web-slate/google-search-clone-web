import React from 'react'

// component
import ResultListItem from './ResultListItem'

function ResultList() {
  return (
    <>
      <ResultListItem
        item={{
          description: 'Sample description',
          title: 'Sample Title',
          link: 'https://google.com',
        }}
      />
    </>
  )
}

export default ResultList
