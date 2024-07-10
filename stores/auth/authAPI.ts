import axios from "axios";
import { config } from "@/config";

const API_URL = `${config.API_URL}/auth`;

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`);
  return response.data;
};
