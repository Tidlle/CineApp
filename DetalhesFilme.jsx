import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesFilme() {
    console.log(useParams())
    const {id} = useParams()
    const [filme, setFilme] = useState({})

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-brgit`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.log(error))
        
        },[])

    return (
        <> 
        <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} alt="" />
        <p className="text-xl font-medium mt-2 ml-8">{filme.title}</p>
        <p className="text-md text-pentenary-thompson mt-2 ml-8 mr-6">{filme.overview}</p>
        <br />
        </>
     );
}

export default DetalhesFilme;
