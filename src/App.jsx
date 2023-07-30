
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
        const key = import.meta.env.UNSPLASH_ACCESS_KEY
        const response2 = await axios.get(`https://api.unsplash.com/search/photos?query=${activity}`, {
          signal: controller2.signal,
          headers: {
            'Accept-Version': 'v1',
            'Authorization': `Client-ID rW2dROgMpBgtZbOMwpIgBJv2gTn3ZY0dd86JIJQqZGY`,
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
  return loading
  ? <Preloader />
  : error
  ? <ErrorMsg error={error}/>
  : <RandomActivity data={data} />
}

export default App

function Preloader(){
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen min-h-[100dvh]">
      <h1 className=" text-4xl font-bold mb-4">What to do today?
      </h1>
      <h1 className="text-6xl  animate-pulse font-bold">Thinking...</h1>
    </div>
    </>
  )
}



function RandomActivity({data}){
  if (Object.keys(data).length === 0 && data.constructor === Object) return
  console.log(data)
  const {
    color,
    blur_hash, 
    alt_description, 
    urls, 
    links:{html:sourcePage, download}, 
    likes, 
    user:{username, links:{html:creatorPage}},
  } = data?.photos?.results[0]

  console.log(color, blur_hash, alt_description, urls, sourcePage, download, likes, username, creatorPage)

  const bgImage = urls.full
  const bgStyle={
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw',
    backgroundPosition: 'center',
  }

  const activityStyle={
    fontSize: 'clamp(2rem, 100px, 10vw)',
    background: 'inherit',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    lineHeight: '1',
    fontWeight: '700',
    color: 'transparent',
    textAlign: 'center',
    filter: 'invert(1) grayscale(1) contrast(9)'
  }
  return(
    <>
    
    <div style={bgStyle} className="flex flex-col justify-center items-center min-h-screen min-h-[100dvh]">
      <h1 style={activityStyle}>This could be a great day to {data?.activity?.activity}</h1>

    </div>
    {/* <h1>{data?.todo?.title}</h1> */}
    </>
  )
}

function ErrorMsg({error}){
  console.log(error)
  return(
    <div className="flex flex-col justify-center items-center min-h-screen min-h-[100dvh]">
      <h1 style={{color: 'red'}}>{error.message}</h1>
    </div>
  )
}