import * as usersAPI from './users-api';

export async function signUp(userData) {

  const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
  }

  export function logOut() {
      localStorage.removeItem('token');
  }

  export function getToken() {
    const token = localStorage.getItem('token'); // getItem returns null if there's no string
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1])); // Obtain the payload of the token
    if (payload.exp < Date.now() / 1000) { // A JWT's exp is expressed in seconds, not milliseconds, so convert
      localStorage.removeItem('token'); // Token has expired - remove it from localStorage
      return null;
    }
    return token;
  }
  
  export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null; // If there's a token, return the user in the payload, otherwise return null

  }