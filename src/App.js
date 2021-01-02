import React from 'react';

import './App.css';
import Row from './Row';

import Banner from './Banner';
import request from './request';
import Navbar from './Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Row
				title="NETFLIX ORIGINAL"
				fetchUrl={request.fetchNetlixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={request.fetchTrending} />
			<Row title="Top Rated" fetchUrl={request.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
			<Row
				title="Documentaries Movies"
				fetchUrl={request.fetchDocumentaries}
			/>
			<Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
		</div>
	);
}

export default App;
