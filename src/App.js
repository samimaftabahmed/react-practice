import React, {Component} from 'react';
import './App.css';
import NavBar from "./component/navbar";
import Counters from "./component/counters";

export default class App extends Component {

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
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}
                        totalQuantity={this.getQuantitySum(this.state.counters)}/>
                <main className="container">
                    <Counters counters={this.state.counters} onReset={this.handleReset}
                              onIncrement={this.handleIncrement}
                              onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>
                </main>
            </React.Fragment>
        );
    }

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

    getQuantitySum(counters) {
        let sum = 0;

        for (let c of counters) {
            if (c.value > 0) {
                sum += c.value;
            }
        }

        return sum;
    }
}
