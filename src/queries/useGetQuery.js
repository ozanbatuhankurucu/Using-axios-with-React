import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export const useGetQuery = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState()

  const getQuery = useCallback(async () => {
    try {
      const result = await axios.get(url)
      if (result.status === 200) {
        setLoading(false)
        setData(result.data)
      }
    } catch (error) {
      setLoading(false)
      if (error.message) {
        setError(error.message)
      }
    }
  }, [url])

  useEffect(() => {
    getQuery()
  }, [getQuery])

  return [data, loading, error]
}
