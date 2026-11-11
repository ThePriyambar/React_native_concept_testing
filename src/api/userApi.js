
import api from '../services/api';

// GET API
export const getUsers = async () => {
  try {
    const response = await api.get('/users');

    return response.data;

  } catch (error) {
    throw error;
  }
};

// GET Single User
export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);

  return response.data;
};

// POST API
export const createUser = async (userData) => {
  const response = await api.post('/users', userData);

  return response.data;
};

// DELETE API
export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);

  return response.data;
};
