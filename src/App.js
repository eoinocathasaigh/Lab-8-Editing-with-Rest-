import logo from './logo.svg';
import './App.css';

function App() {
  return ( //Why this may look like normal html code its not so dont get it confused with it
    //This is the visual piece of our component - replace it with anything to get it to display
    //Can enter business logic here too
    <div className="App">
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
