import axios from "axios";
import decode from "jwt-decode";

function getTokenHeader() {
  const token = getToken(); 
  return token ? `Bearer ${token}` : '';
}

function getToken() {
  return JSON.parse(localStorage.getItem('user')).token;
}

function UserBodyError(body) {
  if (!body.username || !body.password) {
    throw new Error("Need both username and password");
  }
}

// Check the stored user data in localStorage. If the current time is beyond 
// the token expiration, delete the user and return false, meaning the user is
// not logged in anymore. Otherwise they are logged in
// inputs:
// 		N/A
// ouputs:
// 		(Boolean)
function loggedIn() {
  try {
    const token = getToken();
    const decodedToken = decode(token);

    if (decodedToken.exp < Date.now()/1000) {
      localStorage.removeItem('user');
      return false;
    } else {
      return true;
    }
  } catch(err) {
    throw err
  }
}
// Fetch request for logging in a user. Returns a promise containing
// object with a user object ({id, name, health, ship, gold} = user)
// and a message with value string. The response should also contain a 
// token which is stored in localstorage along with user info.
//
// inputs:
// 		body (object): {username, password}
// outputs:
// 		response.data (promise): promise({user, message, token})
async function login(body) {
  UserBodyError(body);
  try {
     const response = await axios.post("/api/user/login", body);

    if (response.statusText === 'OK') {
      console.log('response good', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } else {
      return {};
    }

    return response.data 
  } catch(err) {
    throw err;
  }
}

// Fetch request for signing up a user. Returns a promise
// containing an object for the newly created user ({id, name, health, ship, gold} = user).
// The response should also contain a token which is stored in localstorage along with user info.
//
// inputs:
// 		body (object): {username, password}
// outputs:
// 		response.data (promise): promise({id, username, createdAt, token})
async function signUp(body) {
  UserBodyError(body);
  try {
    const response = await axios.post("/api/user", body);

    if (response.statusText === 'OK') {
      console.log('response ok', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } else {
      return {};
    }

    return response.data;
  } catch(err) {
    throw err;
  }
}

// function logout() {
// 	localStorage.removeItem('user');
// 	window.location.assign('/');
// }

// Fetch request for signing up a user. Returns a promise
// containing an object for the newly created user ({id, name, health, ship, gold} = user)
//
// inputs:
// 		userId (Number)
// outputs:
// 		response (promise): promise([{id, user_id, location_id, char_id, health, ship, gold, inProgress}...])
async function getUserGames(userId) {
  if (typeof userId !== "number") {
    throw new Error("Input must be a Number type");
  }
  const response = await axios.get(`/api/game/${userId}`);
  return response.data;
}

// GET request for all available characters for a user to pick from
// 
// inputs:
// 		N/A
// outputs:
// 		response.data (promise): promise([{id, name, health, ship, gold}])
async function getCharPrototypes() {
  const response = await axios.get("/api/charProto");
  return response.data; 
}


// POST request to create a new game given the user_id, character the user chose, and the first location_id
//
// inputs:
// 		user_id (Number): Specifier for user
// 		body (object): {char_id, health, ship, gold, location_id}
// outputs:
// 		response.data (promise): promise({id, inProgress, user_id, char_id, health, ship, gold})
async function createGame(user_id, body) {
  if (!user_id || !body.char_id || !body.health || !body.ship || !body.gold || !body.location_id) {
    console.log(user_id, body)
    throw new Error("Arguments require user_id, char_id, location_id, health, ship, and gold");
  }
  const response = await axios.post('/api/game', {user_id, ...body});
  return response.data;
}

// GET request to get all encounters associated with a single location
//
// inputs:
// 		location_id (Number)
// outputs:
// 		response.data (promise): Array of encounters as a promise; promise([{id, message, option1, option2, location_id, Location{id, name, createdAt, updatedAt}}, {...}...]])
async function getEncounter(location_id) {
  if (!location_id) {
    throw new Error("Must pass location id");
  }
  const response = await axios.get(`/api/encounter/${location_id}`);
  return response.data;
}

const apiCalls = {
  getUserGames,
  login,
  signUp,
  getCharPrototypes,
  createGame,
  getEncounter,
  loggedIn

}; 

export default apiCalls; 
