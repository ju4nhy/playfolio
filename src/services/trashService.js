import axios from 'axios'
const baseUrl = 'http://localhost:3001/trash'

const getAllTrash = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createTrash = game => {
  const request = axios.post(baseUrl, game)
  return request.then(response => response.data)
}

const deleteTrash = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const trashService = {
  getAllTrash,
  createTrash,
  deleteTrash
}

export default trashService