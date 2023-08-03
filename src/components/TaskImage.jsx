import { useEffect, useContext } from "react";
import Footer from "./Footer";
import {ProgressContext} from "../App"

function TaskImage({imageObj, handleLoading, handleBackground}) {
  const { setProgress } = useContext(ProgressContext)
  let photoUrl = !imageObj
  ? ''
  : window.outerWidth > 1920
  ? imageObj.urls.full
  : imageObj.urls.regular
  
  useEffect(()=>{
    if (photoUrl === '') return
    setProgress('Downloading photo from Unsplash')
    let image = new Image()
    const handleLoaded = () => {
      console.log('Image loaded successfully.')
      handleBackground({
        backgroundImage: `url(${photoUrl
      })`})
      handleLoading(false)
    }
    image.addEventListener('load', handleLoaded)

    // console.log(imageObj)
    image.src = photoUrl

    return () => {
      image.removeEventListener('load', handleLoaded)
      image = null
    }
  }, [photoUrl])

  return(
    <>
    <Footer imageObj={imageObj} />
    </>
  )
  
}

export default TaskImage