import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar";
import Counters from "./component/counters";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, liked: true },
      { id: 2, value: 0, liked: false },
      { id: 3, value: 2, liked: false },
      { id: 4, value: 0, liked: true },
    ],
  };

  initialState = { ...this.state };

  constructor() {
    super();
    console.log("App - Constructor called");
    //setting state here
    // donot call setState, as Component is not rendered
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - Updated");
    console.log("PrevProps: ", prevProps);
    console.log("PrevState: ", prevState);
  }

  // componentWillUnmount;

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          totalQuantity={this.getQuantitySum(this.state.counters)}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
        </main>
        <Zang />
      </React.Fragment>
    );
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.initialState.counters];
    console.log("Counters State: ", counters);
    this.setState({ counters });
  };

  handleLike = (counter) => {
    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    let counterNew = (counters[index] = { ...counters[index] });
    counterNew.liked = !counterNew.liked;
    this.setState({ counters });
  };

  getQuantitySum(counters) {
    let sum = 0;

    for (let c of counters) {
      sum += c.value;
    }

    return sum;
  }
}

/**
 * By default props can be accessed with the new API. Accessing props from constructor is deprecated.
 * @param props - React Props
 * @returns html
 */
export function Zang(props) {
  console.log("Zangwale: ", props);

  return <div>Samim</div>;
}
