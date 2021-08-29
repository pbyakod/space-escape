import axios from "axios";
import decode from "jwt-decode";

function getTokenHeader() {
	const token = getToken(); 
	return token ? `Bearer ${token}` : '';
}

function createRequestHeader() {
	const tokenHeader = getTokenHeader();
	return {headers: {authorization: tokenHeader}};
}

function getToken() {
	if (localStorage.getItem('user')) {
		return JSON.parse(localStorage.getItem('user')).token;
	} else {
		return null
	}
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
	const token = getToken();
	if (!token) {
		console.log('Not logged in');
		return false;
	}

	const decodedToken = decode(token);

	if (decodedToken.exp < Date.now()/1000) {
		localStorage.removeItem('user');
		console.log('Not logged in');
		return false;
	} else {
		console.log('Logged in')
		return true;
	}
}
// Fetch request for logging in a user. Returns a promise containing
// object with a user object ({id, name, health, ship, gold} = user)
// and a message with value string
//
// inputs:
// 		body (object): {username, password}
// outputs:
// 		response (promise): promise({user, message})
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
		console.log(err)
	}
}

// Fetch request for signing up a user. Returns a promise
// containing an object for the newly created user ({id, name, health, ship, gold} = user)
//
// inputs:
// 		body (object): {username, password}
// outputs:
// 		response (promise): promise({dbUserData})
async function signUp(body) {
  UserBodyError(body);
	try {
  	const response = await axios.post("/api/user", body);
  	return response.data;
	} catch(err) {
		return err.response;
	}
}

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
	try {
		const response = await axios.get(`/api/game/${userId}`, createRequestHeader());
		return response.data;
	} catch(err) {
		return err.response;
	}
}

async function getCharPrototypes() {
	try {
		const response = await axios.get("/api/charProto", createRequestHeader());
  	return response.data; 
	} catch(err) {
		return err.response;
	}
}

async function createGame(user_id, body) {
	if (!user_id || !body.char_id || !body.health || !body.ship || !body.gold || !body.location_id) {
		console.log(user_id, body)
		throw new Error("Arguments require user_id, char_id, location_id, health, ship, and gold");
	}
	try {
		const response = await axios.post('/api/game', {user_id, ...body}, createRequestHeader());
		return response.data;
	} catch(err) {
		return err.response;
	}
}


async function getEncounter(location_id) {
	if (!location_id) {
		throw new Error("Must pass location id");
	}
	try {
		const response = await axios.get(`/api/encounter/${location_id}`, createRequestHeader());
		return response.data;
	} catch(err) {
		return err.response;
	}
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
