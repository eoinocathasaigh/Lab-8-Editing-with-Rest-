//This file exists for the purpose of handling movies
import React from "react";
//useParams - hook to get dynamic parameters of the current route
//- We're going to use it to get the id from the movie url
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
//useNavigate - hook enabling navigation to different routes programmatically
//- We use it after the user submits their edited movie. Redirects user to the read page
import { useNavigate } from "react-router-dom";

const Edit = ()=>{
    const {id} = useParams();
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');
    const[poster, setPoster] = useState('');

    useEffect(()=>{
        //Makes http request method at a specific movie url
        //When we navigate to this page now the following happens:
        //- The data from the movie we wish to edit is moved in
        axios.get('http://localhost:4000/api/movie/'+id)
        .then((res)=>{
            console.log(res.data);
            setTitle(res.data.title);
            setYear(res.data.year);
            setPoster(res.data.poster);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    //Used to handle when our submit button is pressed
    //Takes in the element, prevents it from repeating
    //Then it logs it to the console
    //Modified version now adds it to the server too
    const handleSubmit = (e) => {
        //Prevents the function from being called multiple times
        e.preventDefault();
        //Outputting the title entered by the user to the console
        const movie = {title, year, poster};
        console.log(movie);

        //axios.post('http://localhost:4000/api/movie', movie)
        //.then((res) => console.log(res.data))
        //.catch((err) => console.log(err.data));
    }
    return(
        //Simple component to be displayed in app.js
        //Each field is handled using reacts useState
        //Each input will be logged to the console upon submission
        <div>
            {/*Getting the title for our movie and saving it to the server*/}
            <h3>Hello from the Eidt component</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Edit movie Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) =>{setTitle(e.target.value)}}></input>
                </div>
            </form>
            {/*Getting the year of release for our movie and saving it to the server*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Edit movie release year: </label>
                    <input type="text"
                    className="form-control"
                    value={year}
                    onChange={(e) =>{setYear(e.target.value)}}></input>
                </div>
            </form>
            {/*Getting the poster for our movie and saving it to the server*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Edit a movie Poster: </label>
                    <input type="text"
                    className="form-control"
                    value={poster}
                    onChange={(e) =>{setPoster(e.target.value)}}></input>
                </div>
                <div>
                    <input type="submit" value="Save Details"></input>
                </div>
            </form>
        </div>
    )
}

export default Edit;