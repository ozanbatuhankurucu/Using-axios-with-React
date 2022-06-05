import axios from 'axios'
import { useState } from 'react'
import { useGetQuery } from '../queries/useGetQuery'

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')

  const fetchDadJoke = async () => {
    const joke = await axios.get(url, {
      headers: {
        Accept: 'application/json'
      }
    })
    setJoke(joke.data.joke)
    console.log('%c -----joke----- ', 'background: #FF0000')
    console.log(joke)
    console.log('%c -----joke----- ', 'background: #FF0000')
  }

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  )
}
export default Headers
