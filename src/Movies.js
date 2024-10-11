import MovieItem from "./MovieItem";

const Movies = (props)=>{
    //Passing data from parent to child using props
    return props.myMovies.map(
        (movie)=>{
            //Takes each individual object and splits up into
            //Different items we can access
            return <MovieItem myMovie={movie}/>
        }
    )
}

export default Movies;