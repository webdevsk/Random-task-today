
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller1 = new AbortController()
    // const controller2 = new AbortController()

    const getData = async () => {
      try {
        const response1 = await axios.get('http://www.boredapi.com/api/activity/', {
          signal: controller1.signal
        })
        const activity = await response1.data.activity

        // const response2 = await axios.get()

        setData({activity: activity})
      } catch (error) {
        error.code !== 'ERR_CANCELED' && setError(error)
      } finally {
        setLoading(false)
      }
      
    }

    getData()
    return () => {
      controller1.abort()
      // controller2.abort()
    }
  }, [])
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen min-h-[100dvh] font-mulish">
    
    {
      loading
      ? <Preloader />
      : error
      ? <ErrorMsg error={error}/>
      : <RandomActivity data={data} />
    }
      

    </div>
    </>
  )
}

export default App

function Preloader(){
  return (
    <>
    <h1 className=" text-4xl font-bold mb-4">What to do today?
    </h1>
    <h1 className="text-6xl  animate-pulse font-bold">Thinking...</h1>
    </>
  )
}



function RandomActivity({data}){
  console.log(data.activity)
  return(
    <>
    <h1>{data.activity}</h1>
    </>
  )
}

function ErrorMsg({error}){
  console.log(error)
  return(
    <h1 style={{color: 'red'}}>{error.message}</h1>
  )
}