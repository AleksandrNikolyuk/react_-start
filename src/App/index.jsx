import React, { Component } from 'react';
// import React from 'react';
import logo from './logo.svg';
import styles from './styles.module.scss';

const actors = ['Jon Snow', 'Rob Stark', 'Sam Tarly'];

class App extends Component {
  state = {
    value: '',
    actors,
  }

  // componentDidMount() {
  //   this.setState((state) => {
  //     state.actors.map(item => (
  //       <li key={item}>{item}</li>
  //     ));
  //   });
  // }

  changeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  addActors = () => {
    this.setState((state) => {
      const actors = state.actors.concat(state.value);
      return {
        actors,
        value: '',
      };
    });
  };

  clearList = () => {
    this.setState({
      actors: [],
    });
  };

  resetList = () => {
    this.setState({ actors });
  };

  render() {
    const {
      addActors, clearList, resetList, changeValue,
    } = this;
    const listActors = this.state.actors.map(item => (
      <li key={item}>{item}</li>
    ));

    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <div className={styles['App-buttons']}>
            <ul>{listActors}</ul>
          </div>
          <div className={styles['App-buttons']}>
            <input type="text" placeholder="Add name" value={this.state.value} onChange={changeValue} />
            <button className={styles.green} type="button" onClick={addActors}>ADD</button>
          </div>
          <div className={styles['App-buttons']}>
            <button className={styles.white} type="button" onClick={clearList}>CLEAR</button>
            <button className={styles.red} type="button" onClick={resetList}>RESET</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
