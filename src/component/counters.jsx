import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component {

    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 2},
            {id: 4, value: 0}
        ]
    };

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <br/><br/>

                        <button className="btn btn-outline-primary" onClick={this.handleReset}>Reset</button>
                        <br/><br/>
                        {
                            this.state.counters.map(counter =>
                                <Counter key={counter.id} onDelete={this.handleDelete}
                                         onIncrement={this.handleIncrement}
                                         onDecrement={this.handleDecrement} counter={counter}>
                                    <h5>Counter #{counter.id}</h5>
                                </Counter>
                            )
                        }
                    </div>
                </div>
            </div>
        );

    };


    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })

        this.setState({counters});
    };
}
