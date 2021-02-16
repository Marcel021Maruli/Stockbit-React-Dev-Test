import axios from 'axios';

const axiosRequestGet = async (url) => {
  const request = await axios.get(url)
  const result = request.data
  return result
}

export default axiosRequestGet
