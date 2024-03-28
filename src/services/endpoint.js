const API_TMDB_BASE=`https://api.themoviedb.org/3/movie/`
const API_TMDB=`${API_TMDB_BASE}now_playing`
const API_KEY=`0796a7a279ae0c5e17ea87dc788ac2ba`

const endpoint={
    getAllMovies:`${API_TMDB}?api_key=${API_KEY}&language=es-ES`,
    getMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}?api_key=${API_KEY}&language=es-ES`,
    getVideoMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}/videos?api_key=${API_KEY}&language=es-ES`//https://api.themoviedb.org/3/movie/{movie_id}/videos
}
export default endpoint;