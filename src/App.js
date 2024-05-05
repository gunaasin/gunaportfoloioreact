import React from 'react';
import './App.css';
import { Maxcom } from './component/Maxcom';
import { Mincom } from './component/Mincom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    return (
      <div className="App w-screen ">
        {width <= 600 ? <Mincom/> : <Maxcom/>  }
      </div>
    );
  }
}

export default App;
