import axios from "axios"

export const handler = async(event, context) => {
    try {
        const response1 = await axios.get('http://www.boredapi.com/api/activity/')
        const task = response1.data

        const deviceOrientation = 'orientation' in event.queryStringParameters 
        ? event.queryStringParameters.orientation
        : 'landscape'

        const response2 = await axios.get(`https://api.unsplash.com/search/photos?query=${task.activity}&orientation=${deviceOrientation}`, {
          headers: {
            'Accept-Version': 'v1',
            'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
          }
        })

        const images = response2.data

        
        return {
            statusCode: 200,
            body: JSON.stringify({
                task: task,
                images: images,
            })
        }
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }
}