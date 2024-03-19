import * as usersAPI from './users-api';

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    return token;
}

// V2 DEBUGGING
// import * as usersAPI from './users-api';

// export async function signUp(userData) {
//     try {
//         // Attempt to sign up and receive either a token or user data
//         const response = await usersAPI.signUp(userData);
//         // Log for debugging;
//         console.log(response);
//         // Assuming response contains a token directly; adjust based on actual structure
//         return response;
//     } catch (error) {
//         console.error("Signup error:", error);
//         // Consider how you want to handle this error. Maybe return null or throw it again.
//         throw error;
//     }
// }
