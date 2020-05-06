import React, {Component} from "react";

export default class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     tags: ["tag1", "tag2"],
    //     imageUrl: "../favicon.ico",
    // };

    styles = {
        fontSize: 30,
        fontWeight: "bold",
    };

    render() {
        console.log("props", this.props);

        return (
            // JSX: JS with HTML
            <div>

                {this.props.children}
                {/*<img src={this.state.imageUrl} alt=""/>*/}
                {/*<br/>*/}

                {/*<button onClick={this.handleIncrement} className="btn btn-success"> Increment</button>*/}
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-success m-2">
                    Increment
                </button>

                <span style={{fontSize: 20, fontWeight: "bold"}} className={this.getBadgeClass()}>
                    {this.formatCount()}
                </span>

                {/*<button onClick={this.handleDecrement} className="btn btn-success"> Decrement</button>*/}
                <button onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-success m-2">
                    Decrement
                </button>

                <button onClick={this.handleDelete} className="btn btn-outline-danger btn-sm m-4"> Delete</button>

                {/*{this.renderTags()}*/}

            </div>
        );
        // JSX ends
    }

    // handleIncrement = () => {
    //     this.setState((state) => ({count: state.count + 1}));
    //     console.log(`increment clicked ${this.state.count}`);
    // }
    //
    // handleDecrement = () => {
    //     this.setState((state) => ({count: state.count - 1}));
    //     console.log(`decrement clicked ${this.state.count}`)
    // }

    handleDelete = () => {
        this.props.onDelete(this.props.counter.id)
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) {
    //         return (
    //             <p>There are no tags!</p>
    //         );
    //     } else {
    //         return (
    //             <ul>
    //                 {
    //                     this.state.tags.map(function (tag) {
    //                         return <li key={tag}>{tag}</li>;
    //                     })
    //                 }
    //             </ul>
    //         );
    //     }
    // }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const count = this.props.counter.value;
        return count === 0 ? <h1>zero</h1> : count;
    }
}

