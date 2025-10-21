import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Services API
export const servicesApi = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
  getMcServices: () => api.get('/services?category=mc'),
  getWeddingServices: () => api.get('/services?category=wedding_organizer'),
};

// Bookings API
export const bookingsApi = {
  create: (bookingData) => api.post('/bookings', bookingData),
  getAll: () => api.get('/bookings'),
  getById: (id) => api.get(`/bookings/${id}`),
  update: (id, data) => api.put(`/bookings/${id}`, data),
  delete: (id) => api.delete(`/bookings/${id}`),
};

// Clients API
export const clientsApi = {
  create: (clientData) => api.post('/clients', clientData),
  getAll: () => api.get('/clients'),
  getById: (id) => api.get(`/clients/${id}`),
};

export default api;