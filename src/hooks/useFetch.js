import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:3000';

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`${API}/${endpoint}`).then(res => setData(res.data));
  }, [endpoint]);
  return { data };
};

export const post = async (endpoint, data) => (await axios.post(`${API}/${endpoint}`, data)).data;
export const patch = async (endpoint, id, data) => (await axios.patch(`${API}/${endpoint}/${id}`, data)).data;
export const del = async (endpoint, id) => (await axios.delete(`${API}/${endpoint}/${id}`)).data;