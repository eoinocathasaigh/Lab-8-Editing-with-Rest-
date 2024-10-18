import { useState } from "react";

const Create = ()=>{
    //We create an array called title
    //Give a method to set the title
    //And give it a default state of useState
    //State Variable
    const[title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return(
        //Simple component to be displayed in app.js
        <div>
            <h3>Hello from the Create component</h3>
        </div>
    )
}

export default Create;