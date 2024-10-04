//This will now return to our main file the same info but as a component we imported
const Content = () =>{
    return(
        <div>
            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

//IN ORDER TO USE THIS WE NEED TO MARK IT FOR EXPORT
//Now this is marked as a component but we need to import this in App.js
export default Content;