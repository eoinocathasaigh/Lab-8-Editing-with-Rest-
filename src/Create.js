import { useState } from "react";//Need to import useState first to use it

const Create = ()=>{
    //We do everything in this class thanks to Axios
    //Allows us to handle http requests & responsed

    //We create an array called title
    //Give a method to set the title
    //And give it a default state of useState
    //State Variable
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');
    const[poster, setPoster] = useState('');

    //Used to handle when our submit button is pressed
    //Takes in the element, prevents it from repeating
    //Then it logs it to the console
    const handleSubmit = (e) => {
        //Prevents the function from being called multiple times
        e.preventDefault();
        //Outputting the title entered by the user to the console
        console.log(title);
        console.log(year);
        console.log(poster);

    }
    return(
        //Simple component to be displayed in app.js
        <div>
            {/*Getting the title for our movie and saving it to the server*/}
            <h3>Hello from the Create component</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add a movie Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) =>{setTitle(e.target.value)}}></input>
                </div>
            </form>
            {/*Getting the year of release for our movie and saving it to the server*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add a movie release year: </label>
                    <input type="text"
                    className="form-control"
                    value={year}
                    onChange={(e) =>{setYear(e.target.value)}}></input>
                </div>
            </form>
            {/*Getting the poster for our movie and saving it to the server*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add a movie Title: </label>
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

export default Create;