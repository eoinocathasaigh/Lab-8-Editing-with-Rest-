import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieItem = (props) =>{

    //Example of a useEffect
    //Can do a similar thing eg React when something changes
    //Right now its doing nothing
    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
      }, [props.myMovie]); // Only run this effect when the mymovie prop changes
    
    return(
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header>
                <Card.Body>
                <blockquote className="blockquote mb-0">
                    <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
                    <footer>{props.myMovie.Year}</footer>
                </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieItem