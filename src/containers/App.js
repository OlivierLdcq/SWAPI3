import React, { Component } from "react";
import CardDisplay from "../components/CardDisplay";
import SearchBar from "../components/SearchBar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsList: "",
      search: "",
      select: "popularity",
      count: 0,
    };
  }

  async componentDidMount() {
    /// here we go fetch the data to the swapi API
    const goFetch = await fetch("https://swapi.py4e.com/api/people");
    const goJson = await goFetch.json();
    this.setState({ starWarsList: goJson, cardFlash: false });
    // here we use setTimeOut to flash a new className in the card in order to animate the progress bars
    setTimeout(() => {
      this.setState({ cardFlash: true });
    }, 100);
    // here we are doing the counter for the percentages
    setInterval(() => {
      if (this.state.count < 100) {
        this.setState({ count: this.state.count + 1 });
      }
    }, 20);
  }

  inputGotChanged = (e) => {
    this.setState({ search: e.target.value });
  };
  selectChanged = (e) => {
    this.setState({ select: e.target.value });
  };
  render() {
    console.log("app render");
    console.log("this is the state : ", this.state);
    return (
      <div className="App">
        <h1 className="title">Star Wars Api</h1>
        {/* <Counter count={this.state.count} /> */}
        <SearchBar
          inputGotChanged={this.inputGotChanged}
          selectChanged={this.selectChanged}
        />
        {this.state.starWarsList !== "" ? (
          <div>
            <CardDisplay
              starWarsList={this.state.starWarsList}
              search={this.state.search}
              select={this.state.select}
              cardFlash={this.state.cardFlash}
              count={this.state.count}
            />
          </div>
        ) : undefined}
      </div>
    );
  }
}

export default App;
