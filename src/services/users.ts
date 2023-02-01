import axios from 'axios'
import {GET_USERS_ENDPOINT } from './Constants'

export const GetUsers = async () => {

	return ( 
		axios.get(GET_USERS_ENDPOINT)
	  		.then( (res) => res.data.results )
	);
  };

