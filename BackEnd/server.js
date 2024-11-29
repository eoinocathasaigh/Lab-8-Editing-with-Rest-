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

//Connection code for our database
const mongoose = require('mongoose');
//Connects us to our database using the connection string
mongoose.connect('mongodb+srv://admin:admin@cluster0.e9tim.mongodb.net/DB11');

//Creating a data model
//This will help us store data to send to the database
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

//Making the movie model & adding to it
//Stores documents in a collection called myMovies
//Is apart of the movieSchema
const movieModel = new mongoose.model('myMoivies', movieSchema);

//Allow us to parse json out of a http request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req.body.title);
    res.send('Movie Added');
});

//Handling sending back data when user goes to api/movies
app.get('/api/movies', async(req, res) => {
  //Await will basically prevent code from going any
  //further until this is completed
  const movies = await movieModel.find({});

  //This sends back the following:
  //- A status code denoting success
  //- The movies data in the form of json
  res.status(200).json({myMovies:movies});
});

//Method for sending data back to server
//This will basicaslly listen constantly for the response being sent back and will display the appropriate message
app.post('/api/movies', async(req, res)=>{
    console.log(req.body.title);

    const{title,year,poster} = req.body;

    //This enables us to access the movie model & save the entered details
    const newMovie = new movieModel({title, year, poster});
    await newMovie.save();

    //Response Message
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

//Performing another search
//- This search is listening for documents specific ids
//- Looking for a specific perameter 
app.get('/api/movie/:id', async (req, res) => {
  //Essentially pulling the parameter out of the id
  //This also needs an await as we just need to wait for things to finish
  const movie = await movieModel.findById(req.params.id);
  res.send(movie);
});

//The following will listen for the app.put method
//-Editing
app.get('api/movie/:id', async (req, res)=>{
  //Finding the movie needs to be async since we dont know how long it will take to get
  const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(movie);
})

//Editing the movies - Ensures the data is set properly
app.put('/api/movie/:id', async (req, res) => {
  let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(movie);
});

//Deleting 
app.delete('/api/movie/:id', async (req, res)=>{
  console.log("Deleting movie with ID: ", req.params.id);
  const movie = await movieModel.findByIdAndDelete(req.params.id)
  res.send(movie);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
/*
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
}*/