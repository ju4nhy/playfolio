import axios from 'axios'
const baseUrl = 'http://localhost:3000/games'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = game => {
  const request = axios.post(baseUrl, game)
  return request.then(response => response.data)
}

const forcedelete = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const update = (id, game) => {
  const request = axios.put(`${baseUrl}/${id}`, game)
  return request.then(response => response.data)
}

const gameService = {
  getAll,
  create,
  forcedelete,
  update
}

export default gameService