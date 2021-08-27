import axios from 'axios';
// const axios = require('axios');

function UserBodyError(body) {
	if (!body.username || !body.password) {
		throw new Error('Need both username and password');
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
	const response = await axios.post('/api/user/login', body,);
	return response;
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
	const response = await axios.post('/api/user', body);
	return response;
}


// Fetch request for signing up a user. Returns a promise
// containing an object for the newly created user ({id, name, health, ship, gold} = user)
// 
// inputs:
// 		userId (Number)
// outputs:
// 		response (promise): promise([{id, user_id, location_id, char_id, health, ship, gold, inProgress}...])
async function getUserGames(userId) {
	if (typeof userId !== 'number') {
		throw new Error('Input must be a Number type');
	}
	return await axios.get(`/api/game/${userId}`);
}

export default {
	getUserGames,
	login,
	signUp
}
