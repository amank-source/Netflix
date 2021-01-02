import React, { useState, useEffect } from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';

const posterBaseUrl = 'http://image.tmdb.org/t/p/original';

function Banner() {
	const [movie, setMovies] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const requests = await axios.get(request.fetchNetlixOriginals);
			setMovies(
				requests.data.results[
					Math.floor(Math.random() * requests.data.results.length - 1)
				]
			);
			return requests;
		}
		fetchData();
	}, []);
	console.log(movie);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("${posterBaseUrl}${movie?.backdrop_path}")`,
				backgroundposition: 'center center',
			}}
		>
			<div className="banner_contents">
				<h1 className="banner_title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
				</div>
				<h1 className="banner_description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner_fadeBottom"></div>
		</header>
	);
}

export default Banner;
