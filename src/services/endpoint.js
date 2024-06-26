const API_TMDB_BASE=`https://api.themoviedb.org/3/movie/`
const API_TMDB=`${API_TMDB_BASE}now_playing`
const API_TMDB_GENRE=`https://api.themoviedb.org/3/genre/movie/list`
const API_KEY=`0796a7a279ae0c5e17ea87dc788ac2ba`
const URL_BASE_BACK=`https://minibackend-cinema.onrender.com/`

const endpoint={
    getAllMovies:`${API_TMDB}?api_key=${API_KEY}&language=es-ES`,
    getMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}?api_key=${API_KEY}&language=es-ES`,
    getVideoMovie:(idMovie)=>`${API_TMDB_BASE}${idMovie}/videos?api_key=${API_KEY}&language=es-ES`,
    getGenresMovies:`${API_TMDB_GENRE}?api_key=${API_KEY}&language=es-ES`,
    getAllCinemas:`${URL_BASE_BACK}cinemas`,
    getCinema:(idCinema)=>`${URL_BASE_BACK}cinemas/${idCinema}`,
    getFuntionAll:`${URL_BASE_BACK}funtion`,
    getFuntionsByCinema:(idCinema)=>`${URL_BASE_BACK}funtion/?cinema_id=${idCinema}`,
    getFuntionsByCinemaAndDate:(idCinema,date)=>`${URL_BASE_BACK}funtion/?cinema_id=${idCinema}&date=${date}`,
    getFuntion:(idFuntion)=>`${URL_BASE_BACK}funtion/${idFuntion}`,
    getPurchaseByFuntion:(idFuntion)=>`${URL_BASE_BACK}purchased_tickets/?idFuntion=${idFuntion}`,
    getTypeRoom: (idTypeRoom)=>`${URL_BASE_BACK}typeRooms/${idTypeRoom}`
}
export default endpoint;