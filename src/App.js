import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <Header message="Create an odometer function that resets after 1000"/>
      <main>
        <div className="App">
          <h1>4 Didgit Odometer w/ Create React App</h1>
        </div>
      <Odometer />
      </main>
      <Footer message="Trademark Alex Pena 2021" />
    </>
  );
}

function Header(props) {
  return (
    <header>
      <nav>props say... {props.message}</nav>
    </header>
  )
}


class Odometer extends React.Component {

  constructor() {
    super();
    this.state = {
      mileage : "0000",
    }
  } 

  addToOdometer(change) {

    let tempMilage = (parseInt(this.state.mileage) + change) % 10000

    this.setState({
      mileage : tempMilage.toString().padStart(4, "0"),
    });
  }
  
  render() {
    return (
      <>
        <main>
          <button onClick={() => this.addToOdometer(1)}>+ 1</button>
          <button onClick={() => this.addToOdometer(10)}>+ 10</button>
          <button onClick={() => this.addToOdometer(100)}>+ 100</button>
          <button onClick={() => this.addToOdometer(1000)}>+ 1000</button>
          <article>
          <div id="odometer" className="odometer">{this.state.mileage}</div>
          </article>
          
        </main>
        </>
    )
  }
}
    
function Footer(props) {
  return (
    <footer>
      <span>props say ... {props.message}</span>
    </footer>
  );
}
