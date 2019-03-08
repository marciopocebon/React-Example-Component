import React  from 'react';
import './App.css';

class ListItem extends React.Component {
  render() {
    return(
          <li>{this.props.index} {this.props.value}</li>
    )
  }
}

class CoolListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
    this.props.items.forEach((item) => {
        this.state.rows.push(item);
        console.log(this.state.rows)
    })
  }

  render() {
    return(
        <>
          {this.state.rows.map(function(row, i){
            return <ListItem value={row} index={i} />;
          })}
        </>
    )
  }
}

class CoolList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.props.elements.forEach((element) => {
        this.state.items.push(element)
    });
  }

  render() {
    return(
        <>
        <div>{this.props.label}</div>
        <ul>
          <CoolListItems items={this.state.items}/>
        </ul>
        </>
    )
  }
}

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
