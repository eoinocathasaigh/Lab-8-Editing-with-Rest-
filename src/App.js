import logo from './logo.svg';
import './App.css';
//Importing all the components we need for this project
import Content from './content'; //Imports our content from our other file
import Header from './Header';
import Footer from './Footer';
import Read from './Read';
import Create from './Create';

//Routing logic for navigation between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavBar';

function App() {
  return ( //Why this may look like normal html code its not so dont get it confused with it
    //This is the visual piece of our component - replace it with anything to get it to display
    //Can enter business logic here too

    //NavBar element enables routing between different pages
    //The following happens when I navigate between pages
    // - By default I land on home so I am shown the "Content" element
    // - When I navigate to "read" - /read and I am shown the "Footer" element
    // - When I navigate to "Create" - /create I am shown the "Header" element

    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
