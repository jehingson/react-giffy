const apiKey = '3bFHlFy2ctScUWnf5WEZBFAwJefL1d0P&q'

export default async function getGifs({ keyword = 'morty' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=es`
    const res = await fetch(apiURL)
    const { data = [] } = await res.json()
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { title, images, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
}