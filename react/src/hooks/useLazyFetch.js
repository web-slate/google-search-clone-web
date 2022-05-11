import { useState } from 'react'
import axios from 'axios'

export default function useLazyFetch(url, searchString) {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState(searchString)

  const mutate = async () => {
    setLoading(true)

    const res = await axios.request({
      method: 'GET',
      url,
    })

    try {
      setResponse(res.data);
      setSearchValue(searchString);
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    mutate,
    response,
    error,
    loading,
    searchValue
  }
}
