import React from "react";
import { useState, useEffect } from "react";
import { GetUsers } from "../services/users";

export interface UserData {
	name: Name;
	cell: string;
	picture: Picture;
	email: string;
}

interface Picture {
	large: string;
	medium: string;
	thumbnail: string;
}

interface Name {
	title:string;
	first:string;
	last:string;
}

const App : React.FunctionComponent = () => {
	
	const [users, setUsers] = useState<UserData[]>([]);
	const [showError, setError] = useState<boolean>(false);

	const hook = () => {
		GetUsers().then( (res) => {
				setError(false);
				setUsers(res);
				//console.log(res);
			})
			.catch((error) => {
				setError(true);
				console.log(error);
			})
		}

	useEffect(hook, []);

	
	return (

    <div className="App">

		<h1>Address Book</h1>
		<br/>
     	 { showError ? <h2>Something's wrong at the server. Please try later</h2> : null}
		<div>

			{users.map( (user: UserData, index) => {
				return (
				<div key={index}>
				<img src={user.picture.medium} alt=""/>
				<div>
					<ul style={ {listStyle: "none"} }>
						<li>{user.name.title} {user.name.first} {user.name.last}</li> 
						<li>{user.email}</li>
						<li>{user.cell}</li>
					</ul>
				</div>
					
			</div>
		)
		})}

		</div>

    </div>
  );
}

export default App;
