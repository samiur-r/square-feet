import axios from 'axios'

import config from 'config'

const baseUrl = config.apiUrl || 'http://localhost:5000/api/v1'

export default axios.create({
  withCredentials: true,
  baseURL: baseUrl
})
