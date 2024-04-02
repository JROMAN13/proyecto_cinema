const API_TMDB_BASE=`https://api.themoviedb.org/3/movie/`
const API_TMDB=`${API_TMDB_BASE}now_playing`
const API_TMDB_GENRE=`https://api.themoviedb.org/3/genre/movie/list`
const API_KEY=`0796a7a279ae0c5e17ea87dc788ac2ba`
const URL_BASE_BACK=`http://localhost:3000/`

const endpoint={
    getAllMovies:`${API_TMDB}?api_key=${API_KEY}&language=es-ES`,
    getMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}?api_key=${API_KEY}&language=es-ES`,
    getVideoMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}/videos?api_key=${API_KEY}&language=es-ES`,
    getGenresMovies:`${API_TMDB_GENRE}?api_key=${API_KEY}&language=es-ES`,
    getAllCinemas:`${URL_BASE_BACK}cinemas`,
    getCinema:(idCinema)=>`${URL_BASE_BACK}cinemas/${idCinema}`,
    getFuntion:(idFuntion)=>`${URL_BASE_BACK}funtion/${idFuntion}`,
    getTypeRoom: (idTypeRoom)=>`${URL_BASE_BACK}typeRooms/${idTypeRoom}`
}
export default endpoint;