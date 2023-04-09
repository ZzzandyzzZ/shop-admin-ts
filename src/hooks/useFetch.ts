import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export default function useFetch<T>(endpoint: string): T[] {
  const [data, setData] = useState([])
  const fetchData = useCallback(async () => {
    const { data } = await axios.get(endpoint)
    setData(data)
  }, [endpoint])
  useEffect(() => {
    try {
      void fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [fetchData])
  return data
}
