import React  from 'react';
import './App.css';
import CoolList from "./CoolList";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          AppName
        </header>

        <div id="main-content">
          <h1>Welcome</h1>
          <p>Welcome to the app.</p>
        </div>

        <CoolList label="Animals" elements={['lion', 'bear', 'cat']}/>
        <CoolList label="Cool People" elements={['Linus', 'Guido', 'Matz']}/>
        <CoolList label="Programming languages" elements={['C', 'Java', 'JavaScript']}/>

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
