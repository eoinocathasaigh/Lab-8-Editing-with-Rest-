import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieItem = (props) =>{

    //Example of a useEffect
    //Can do a similar thing eg React when something changes
    //Right now its doing nothing
    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
      }, [props.myMovie]); // Only run this effect when the mymovie prop changes
    
    return(
        <div>
            {/*This card format is exactly the same as simply 
            Printing out each element into a h3 or an image
            The main difference is that this time its formatted better into individual cards*/}

            {/*This method is the bootstrap variant of the cards format
            Requires importing the card component from the react bootstrap*/}
            <Card style={{ width: '18rem' }}>
                <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={props.myMovie.poster} />
                    <footer>{props.myMovie.year}</footer>
                </Card.Body>
                {/*We want to redirect the user to a different url when they click this button*/}
                {/*The props.myMovies._id will give us the unique id for each individual movie*/}
                <Link className="btn btn-primary" to={"/edit/"+props.myMovie._id}>Edit</Link>
            </Card>
        </div>
    )
}

export default MovieItem