import logo from './logo.svg';
import './App.css';
import Content from './content'; //Imports our content from our other file

function App() {
  return ( //Why this may look like normal html code its not so dont get it confused with it
    //This is the visual piece of our component - replace it with anything to get it to display
    //Can enter business logic here too
    <div className="App">
      <Content></Content>
    </div>
  );
}

export default App;
