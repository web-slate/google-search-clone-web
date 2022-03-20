import { useState } from 'react'
import axios from 'axios'

export default function useLazyFetch(url) {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const mutate = async () => {
    setLoading(true)

    const res = await axios.request({
      method: 'GET',
      url,
    })

    try {
      setResponse(res.data)
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
  }
}
