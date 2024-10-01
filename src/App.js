import skhlogo from './skhlogo.jpg';
import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
    <img src={skhlogo} className='App-logo img-fluid' alt='logo'/>
      </header>

      <main>
        <Dictionary />
      </main>

      <footer className='App-footer'>
        Coded by Simona Katarína Hlinka an open-sourced on GitHub
      </footer>
    </div>
  </div>
  );
}

export default App;
