import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import TaskLabel from './TaskLabel'
import TaskImage from './TaskImage'
import { ProgressContext } from '../App'

export default function RandomContent({ handleLoading }) {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [background, setBackground] = useState({ background: '#333333' })
  const handleBackground = obj => setBackground(obj)
  const { setProgress } = useContext(ProgressContext)

  useEffect(() => {
    const controller = new AbortController()

    const getData = async () => {
      try {
        setProgress("Calling some api's")
        //Serverless function
        const response = await axios.get(`/.netlify/functions/fetchApi`)
        // console.log(response)
        setData({
          task: response.data.task,
          images: response.data.images,
        })
      } catch (error) {
        setError(error)
      }
    }
    getData()

    return () => {
      controller.abort()
    }
  }, [])

  //Returning Error message
  if (error) {
    console.log(error)
    handleLoading(false)
    return <h1 style={{ color: 'red' }}>{error.message}</h1>
  }

  //Return nothing if object is empty
  if (Object.keys(data).length === 0 && data.constructor === Object) return null

  const label = data.task.activity
  const imageObj = data.images.results[0]

  return (
    <>
      <div
        style={background}
        className="bg-no-repeat bg-cover bg-center"
      >
        <TaskLabel
          label={label}
          imageObj={imageObj}
        />
        <TaskImage
          imageObj={imageObj}
          handleLoading={handleLoading}
          handleBackground={handleBackground}
        />
      </div>
    </>
  )
}
