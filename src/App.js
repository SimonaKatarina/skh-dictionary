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
        Coded by <a href='https://simona-katarina-portfolio.netlify.app/' target='_blank' rel="noopener noreferrer">Simona Katarína Hlinka </a>and is 
      <a href='https://github.com/SimonaKatarina/weather-skh-react-project/blob/master/README.md' target="_blank" rel="noopener noreferrer"> open-sourced on GitHub</a>
    </footer>
    </div>
  </div>
  );
}

export default App;
