import React, { Component } from "react";

export default class Counter extends Component {
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  componentDidMount() {
    console.log("Counter - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Updated");
    console.log("PrevProps: ", prevProps);
    console.log("PrevState: ", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  render() {
    console.log("Counter - Rendered");
    // console.log("props", this.props);

    const { onIncrement, onDecrement, counter, onDelete, onLike } = this.props;

    return (
      // JSX: JS with HTML
      <div>
        {this.props.children}
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-success m-2"
        >
          {" "}
          Increment
        </button>

        <span
          style={{ fontSize: 20, fontWeight: "bold" }}
          className={this.getBadgeClass()}
        >
          {this.formatCount()}
        </span>

        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-success m-2"
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          Decrement
        </button>

        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-outline-danger btn-sm m-4"
        >
          Delete
        </button>
        <i
          className={this.getFontAwesomeClasses()}
          onClick={() => onLike(counter)}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
    // JSX ends
  }

  getFontAwesomeClasses() {
    let classes = "fa-heart ";
    classes += this.props.counter.liked ? "fa-solid" : "fa-regular";
    return classes;
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>zero</h1> : value;
  }
}
