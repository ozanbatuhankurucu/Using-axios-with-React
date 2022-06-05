import { useGetQuery } from '../queries/useGetQuery'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  const [products, loading, error] = useGetQuery(url)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}
export default FirstRequest
