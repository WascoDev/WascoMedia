import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
 // url: BASE_URL,
 params: {
  maxResults: '50',
 },
 headers: {
  'X-RapidAPI-Key': '57d762047emsh06ebb8ee0afd55dp12ee85jsnb06bbae90a8f',
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
 },
}

export const fetchFromApi = async (url) => {
 const { data } = await axios.get(`${BASE_URL}/${url}`, options)

 return data
}
