import github from './db';
import { useEffect, useState } from 'react';

function App() {
	let [userName, setUserName] = useState('');
	useEffect(() => {
		const githubQuery = {
			query: `
			{
				viewer {
				  login
				}
			}
		`,
		};

		fetch(github.baseUrl, {
			method: 'POST',
			header: github.headers,
			body: JSON.stringify(githubQuery),
		})
			.then((response) => response.json())
			.then((data) => {
				setUserName(data.data.viewer.name);
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	return (
		<div className="App container mt-5">
			<h1 className="text-primary">
				<i className="bi bi-diagram-2-fill"></i> Repos
			</h1>
			<p>Hey there {userName}</p>
		</div>
	);
}

export default App;
