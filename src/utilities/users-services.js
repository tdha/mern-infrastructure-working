import * as usersAPI from './users-api';

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module which will return a JSON Web Token (JWT)
    const token = await userAPI.signUp(userData);
    // Baby step by returning whatever is sent back by the server
    return token;
}