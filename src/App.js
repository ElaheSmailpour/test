import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
	const [name, setName] = useState([]);

	useEffect(() => {
		async function response() {
			let res = await Axios.get("/user");
			let data = res.data;
			console.log(data);
			return data;
		}
		response().then((data) => {
			setName(data);
		});
		// fetch("http://localhost:5000/user")
		// 	.then((httpResponse) => {
		// 		console.log(httpResponse);
		// 		// httpResponse.json().then((antwortObjekt) => {
		// 		// 	const leute = antwortObjekt;
		// 		// 	setname(leute);
		// 		// });
		// 	})
		// 	.catch((fehler) => {
		// 		console.error(fehler);
		// 	});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<p>Hallo...</p>
				<ul>
					{name.map((username, i) => {
						return <li key={"name" + i}>{username.name}</li>;
					})}
				</ul>
			</header>
		</div>
	);
}

export default App;
