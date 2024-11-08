//Same code from our lab 5
//We need to modify to sent back some json data back
//API of movies
const express = require('express');
const app = express();
const port = 4000;

//Code to enable cors for this application 
//Cors basically restricts web pages from making requests to different ports
//Without configuring this the browser would block us from accessing it
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Allow us to parse json out of a http request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req.body.title);
    res.send('Movie Added');
});

//Handling sending back data when user goes to api/movies
app.get('/api/movies', (req, res) => {
    const movies = [
        {
          "Title": "Avengers: Infinity War (server)",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War (server)",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z (server)",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];
    //This sends back the following:
    //- A status code denoting success
    //- The movies data in the form of json
    res.status(200).json({myMovies:movies});
});

//Method for sending data back to server
//This will basicaslly listen constantly for the response being sent back and will display the appropriate message
app.post('/api/movies', (req, res)=>{
    console.log(req.body.title);
    res.send('Movie Added');
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});