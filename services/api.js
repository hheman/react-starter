const baseURL = 'https://api.example.com'; // Replace with your API base URL
const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const get = async (url, params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${baseURL}${url}?${queryString}`, {
      method: 'GET',
      headers: defaultHeaders,
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const post = async (url, data) => {
  try {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(data),
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const put = async (url, data) => {
  try {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'PUT',
      headers: defaultHeaders,
      body: JSON.stringify(data),
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const del = async (url) => {
  try {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'DELETE',
      headers: defaultHeaders,
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API call failed');
  }
  return response.json();
};

const handleError = (error) => {
  // Handle error appropriately
  console.error('API call failed. ', error);
  throw error;
};
