// V2 DEBUGGING
import * as usersAPI from './users-api';

export async function signUp(userData) {
    try {
        // Attempt to sign up and receive either a token or user data
        const response = await usersAPI.signUp(userData);
        // Log for debugging;
        console.log(response);
        // Assuming response contains a token directly; adjust based on actual structure
        return response;
    } catch (error) {
        console.error("Signup error:", error);
        // Consider how you want to handle this error. Maybe return null or throw it again.
        throw error;
    }
}

// V1
// import * as usersAPI from './users-api';

// export async function signUp(userData) {
//     // Delegate the network request code to the users-api.js API module which will return a JSON Web Token (JWT)
//     const token = await usersAPI.signUp(userData);
//     // Baby step by returning whatever is sent back by the server
//     return token;
// }