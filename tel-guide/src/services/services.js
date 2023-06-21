import axios from "axios";

const baseUrl = "/api/persons"
//const baseUrl = "http://localhost:3001/api/persons"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newContact => {
  const request = axios.post(baseUrl, newContact)
  return request.then(response => response.data)
}

const deleteContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.status)
}

const editNumber = (id, newNumber) => {
  const request = axios.put(`${baseUrl}/${id}`, newNumber)
  return request.then(response => response.data)
}

export default {getAll, create, deleteContact, editNumber}