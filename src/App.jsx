import { useEffect, useState } from 'react'
import { getAllMovies, getTrailerMovie } from './services/movieServices'


function App() {
  const [movies, setMovies] = useState([])
  const [video,setVideo]=useState("")
  useEffect(()=>{
    getAllMovies().then((response)=>{
      {console.log(response)};
      setMovies(response);
    }).catch((error)=> console.error(error));
  },[])
  useEffect(()=>{
    getTrailerMovie(1011985).then((response)=> {
      console.log(response);
      setVideo(response.key)
    }).catch((error)=>console.error(error))
  },[])

  return (
    <>
     <h1>Movies</h1>
     <iframe src={`https://www.youtube.com/embed/${video}`}></iframe>
    </>
  )
}

export default App
