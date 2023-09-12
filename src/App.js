import github from './db';
import { useEffect, useState } from 'react';
import query from './Query';

function App() {
	let [userName, setUserName] = useState(null);
	useEffect(() => {
		fetch(github.baseUrl, {
			method: 'POST',
			headers: github.headers,
			body: JSON.stringify(query),
		})
			.then((response) => response.json())
			.then((data) => {
				if(data && data.data && data.data.viewer && data.data.viewer.login) {
					setUserName(data.data.viewer.login);
				} else {
					console.error('Error: Invalid data received');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className="App container mt-5">
			<h1 className="text-primary">
				<i className="bi bi-diagram-2-fill"></i> Repos
			</h1>
			<p>Hey there {userName ? userName : 'Loading...'}</p>
		</div>
	);
}

export default App;
