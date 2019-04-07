import React, { Component } from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
