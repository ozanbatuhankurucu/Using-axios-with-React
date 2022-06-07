import { useEffect } from 'react'
import { authFetch } from '../axios/interceptors'
const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    console.log('axios interceptors')
    try {
      const response = await authFetch('/react-store-products')
      console.log('%c -----response----- ', 'background: #FF0000')
      console.log(response)
      console.log('%c -----response----- ', 'background: #FF0000')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
