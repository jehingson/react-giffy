import { API_KEY, API_URL } from './settings'


const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    console.log('data data', data)
    return data
}

export default async function getTrendingSearchTerms() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}