const MovieItem = (props) =>{
    return(
        <div>
            {/*Whatever variable name we have in our parent directory must match here*/}
            {/*Here I refer to the props, then tell them the variable and finally the set of data i'd like to display*/}
            <h3>{props.myMovie.Title}</h3>
            {/*Now I can also display the posters*/}
            <img src={props.myMovie.Poster}></img>
        </div>
    )
}

export default MovieItem