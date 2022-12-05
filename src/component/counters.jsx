import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component {
  componentDidMount() {
    console.log("Counters - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counters - Updated");
    console.log("PrevProps: ", prevProps);
    console.log("PrevState: ", prevState);
  }

  render() {
    console.log("Counters - rendered");
    const { onDelete, onDecrement, onIncrement, onReset, onLike, counters } =
      this.props;

    return (
      <div className="row">
        <div className="col-8 offset-2">
          <br />
          <br />

          <button className="btn btn-outline-primary" onClick={onReset}>
            Reset
          </button>
          <br />
          <br />
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onLike={onLike}
            >
              <h5>Counter #{counter.id}</h5>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}
