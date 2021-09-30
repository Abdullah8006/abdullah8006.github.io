import logo from './logo.svg';
import './App.css';


const styleStackoverflow = {
  color: '#960404',
};

const styleGithub = {
  color: '#4242ae',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Profile coming soon...
        </p>
	<p>
         For the time being you can checkout my <a href="https://stackoverflow.com/users/3094731/abdullah-khan" style={styleStackoverflow}>Stackoverflow</a> and <a href="https://github.com/Abdullah8006" style={styleGithub}>Github</a>
	</p>
      </header>
    </div>
  );
}

export default App;
