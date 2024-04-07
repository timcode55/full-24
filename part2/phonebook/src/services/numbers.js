import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const create = async (newObject) => {
  const request = await axios.post(baseUrl, newObject);
  return request.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, update, deletePerson };
