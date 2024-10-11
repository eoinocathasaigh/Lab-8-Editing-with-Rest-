const Movies = (props)=>{
    //Passing data from parent to child using 
    return(
        <div>
            <h3>Hello from the Movie component</h3>
            {console.log(props.myMovies)}
        </div>
    )
}

export default Movies;