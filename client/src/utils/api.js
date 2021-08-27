import axios from "axios";
// const axios = require('axios');

function UserBodyError(body) {
  if (!body.username || !body.password) {
    throw new Error("Need both username and password");
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
  const response = await axios.post("/api/user/login", body);
  return response.data;
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
  const response = await axios.post("/api/user", body);
  return response.data;
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
	const response = await axios.get(`/api/game/${userId}`);
  return response.data;
}

async function getCharPrototypes() {
	const response = await axios.get("/api/charProto");
  return response.data; 
}

async function createGame(user_id, body) {
	if (!user_id || !body.char_id || !body.health || !body.ship || !body.gold || !body.location_id) {
		console.log(user_id, body)
		throw new Error("Arguments require user_id, char_id, location_id, health, ship, and gold");
	}
	const response = await axios.post('/api/game', {user_id, ...body});
	return response.data;
}


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
	getEncounter

}; 

export default apiCalls; 
