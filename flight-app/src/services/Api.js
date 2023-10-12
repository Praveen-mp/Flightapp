import axios from 'axios';
const url="http://localhost:8080"
const authHeader = localStorage.getItem('token');
export const headers = {
  'Authorization': `Bearer ${authHeader}`,
  'Content-Type': 'application/json'
};
export const login = (data)=>axios.post(`${url}/login `,data);
export const landing =(data)=>axios.post(`${url}/`,data);
console.log(login);