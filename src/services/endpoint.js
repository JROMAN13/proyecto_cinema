const API_TMDB_BASE=`https://api.themoviedb.org/3/movie/`
const API_TMDB=`${API_TMDB_BASE}now_playing`
const API_KEY=`33d8c677ac3dca2b6ec7d121f7324a9e`

const endpoint={
    getAllMovies:`${API_TMDB}?api_key=${API_KEY}&language=es-ES`,
    getMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}?api_key=${API_KEY}&language=es-ES`,
    getVideoMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}/videos?api_key=${API_KEY}&language=es-ES`//https://api.themoviedb.org/3/movie/{movie_id}/videos
}
export default endpoint;