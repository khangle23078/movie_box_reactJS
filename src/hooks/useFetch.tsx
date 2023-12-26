/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { instance } from '../api/instance'

const useFetch = (type: string, option: string | number, params?: object) => {
  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const abort = new AbortController()
    const getAll = async () => {
      setLoading(true)
      try {
        const { data } = await instance.get(`/${type}/${option}`, {
          signal: abort.signal,
          params: params
        })
        setData(data)
        setLoading(false)
      } catch (error) {
        setLoading(true)
        setError('Có lỗi xảy ra!')
      }
    }

    getAll()
    return () => abort.abort()
  }, [type, option])

  return { data, loading, error }
}

export default useFetch