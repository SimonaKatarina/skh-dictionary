import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <h1>
        - Dictionary -
        </h1>
     </header>

      <main>
        <Dictionary defaultKeyword="dictionary"/>
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
