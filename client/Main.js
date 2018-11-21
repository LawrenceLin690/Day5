import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  async componentDidMount() {
    const res = await axios.get('/api');
    this.setState({ text: res.data });
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default Main;
