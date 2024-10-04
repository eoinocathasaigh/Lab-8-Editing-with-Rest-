import logo from './logo.svg';
import './App.css';
//Importing all the components we need for this project
import Content from './content'; //Imports our content from our other file
import Header from './Header';
import Footer from './Footer';

//Routing logic for navigation between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavBar';

function App() {
  return ( //Why this may look like normal html code its not so dont get it confused with it
    //This is the visual piece of our component - replace it with anything to get it to display
    //Can enter business logic here too

    //NavBar element enables routing between different pages
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/read" element={<h1>Read Component</h1>} />
          <Route path="/create" element={<h1>Create Component</h1>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
