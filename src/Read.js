import Movies from "./Movies";
import { useEffect, useState } from 'react';
import axios from 'axios';
//Importing our Movies component

//Read component holds an array of JSON data we will pass to our movies component to use from there
const Read = ()=>{
  //We create an array called movies
  //Give a method to set movies
  //And give it a default state of useState
  //State Variable

  //useState Allows us to state variables to functional components
  //Essentially another way for us to handle data in the class
  const[movies, setMovies] = useState([]);
  const Reload = () =>{
    axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
          console.log(response.data);
          setMovies(response.data.myMovies);
        })//Callback function - done when request is completed
        .catch(
          (error)=>{
            console.log(error);
          }
        )
  }
    //Http work can be done through this method - Needs to be imported first above
    //Allows us to synchronize with an external system
    useEffect(()=>{
        //Makes http request with the get method
        //This is the exact same as previous way except we're getting it from an api
        //Done in the background - app doesnt hang
        //Result is a promise - need to put a .then() and .catch() - its an asynchronous request
        Reload();
      },[] // - Doing this calms the array to stop it from being called multiple times
    );
    return(
        <div>
            <h3>Hello from the Read component</h3>
            {/*We create the variable "myMovies" for our movies component and pass it the data we have in this class*/}
            <Movies myMovies ={movies} ReloadData={Reload}/>
        </div>
    )
}

export default Read;