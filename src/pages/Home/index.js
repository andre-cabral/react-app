import logo from '../../images/logo.svg';
import './style.scss';

function Home() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
