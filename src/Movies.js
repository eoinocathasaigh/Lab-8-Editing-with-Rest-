import MovieItem from "./MovieItem";

const Movies = (props)=>{
    //Passing data from parent to child using props
    //Map Function essentially allows us to iterate through the items and return them
    //Will repeat over itself and print all the items we have to print
    return props.myMovies.map(
        (movie)=>{
            //Takes each individual object and splits up into
            //Different items we can access
            return <MovieItem myMovie={movie} key={movie._id} Reload={props.ReloadData}/>
        }
    )
}

export default Movies;