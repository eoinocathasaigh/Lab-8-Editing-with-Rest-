import logo from './logo.svg';
import './App.css';
//Importing all the components we need for this project
import Content from './content'; //Imports our content from our other file
import Header from './Header';
import Footer from './Footer';

function App() {
  return ( //Why this may look like normal html code its not so dont get it confused with it
    //This is the visual piece of our component - replace it with anything to get it to display
    //Can enter business logic here too
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
