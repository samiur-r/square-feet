import axios from 'axios'

const baseUrl = process.env.API_BASE_URL || 'http://localhost:5000/api/v1'

export default axios.create({
  withCredentials: true,
  baseURL: baseUrl
})
