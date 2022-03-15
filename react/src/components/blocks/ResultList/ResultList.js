import React from 'react'

// component
import ResultListItem from './ResultListItem'

function ResultList(props) {
  const { resultData = '' } = props
  return (
    <>
    {resultData.map((data) => {
      return (<ResultListItem
        item={{ title: data.title,
                description: data.content,
                link: data.url,
             }}
        />)
    })}
    
    </>
  )
}

export default ResultList
