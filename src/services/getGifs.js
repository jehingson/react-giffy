import { API_KEY, API_URL } from './settings'

export default async function getGifs({ limit = 25, keyword = 'morty', page = 0 } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=es`;

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