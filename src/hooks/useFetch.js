// src/hooks/useFetch.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API = 'http://localhost:3000';

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/${endpoint}`);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export const postData = async (endpoint, data) => {
  const response = await axios.post(`${API}/${endpoint}`, data);
  return response.data;
};

export const patchData = async (endpoint, id, data) => {
  const response = await axios.patch(`${API}/${endpoint}/${id}`, data);
  return response.data;
};

export const deleteData = async (endpoint, id) => {
  const response = await axios.delete(`${API}/${endpoint}/${id}`);
  return response.data;
};