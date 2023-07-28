
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller1 = new AbortController()
    const controller2 = new AbortController()

    const getData = async () => {
      try {
        const response1 = await axios.get('http://www.boredapi.com/api/activity/', {
          signal: controller1.signal
        })
        const activity = response1.data.activity

        const response2 = await axios.get(`https://api.pexels.com/v1/search?query=${activity}&orientation=landscape`, {
          signal: controller2.signal,
          headers: {
            'Authorization': 'jgkskeNCnd4kGwZ2td4j2u50wgCgX7cNze9QmqG0sL6s7Wl8x4ATX9YO'
          }
        })

        setData({
          activity: response1.data,
          photos: response2.data
          })
        
      } catch (error) {
        error.code !== 'ERR_CANCELED' && setError(error)
      } finally {
        setLoading(false)
      }
      
    }

    getData()
    return () => {
      controller1.abort()
      controller2.abort()
    }
  }, [])
  return (
    <>
    {
      loading
      ? <Preloader />
      : error
      ? <ErrorMsg error={error}/>
      : <RandomActivity data={data} />
    }
    </>
  )
}

export default App

function Preloader(){
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen min-h-[100dvh] font-mulish">
      <h1 className=" text-4xl font-bold mb-4">What to do today?
      </h1>
      <h1 className="text-6xl  animate-pulse font-bold">Thinking...</h1>
    </div>
    </>
  )
}



function RandomActivity({data}){
  console.log(data)
  const bgImage = data?.photos?.photos[0]?.src?.large
  const bgStyle={
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  const activityStyle={
    fontSize: 'clamp(2rem, 6vw, 5rem)',
    fontWeight: '700',
    textShadow: '2px 2px 0px black',
    color: '#ffffffeb'
  }
  return(
    <>
    
    <div style={bgStyle} className="flex flex-col justify-center items-center min-h-screen min-h-[100dvh] font-mulish">

      <h1 style={activityStyle}>{data?.activity?.activity}</h1>

    </div>
    {/* <h1>{data?.todo?.title}</h1> */}
    </>
  )
}

function ErrorMsg({error}){
  console.log(error)
  return(
    <div className="flex flex-col justify-center items-center min-h-screen min-h-[100dvh] font-mulish">
      <h1 style={{color: 'red'}}>{error.message}</h1>
    </div>
  )
}