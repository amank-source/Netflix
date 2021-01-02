const Api_key = 'ab1801b142caad4dfb261c93e08115aa'
const request = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchNetlixOriginals: `/discover/tv?api_key=${Api_key}&witg_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
}
export default request
