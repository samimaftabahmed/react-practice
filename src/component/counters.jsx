import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component {

    render() {

        const {onDelete, onDecrement, onIncrement, onReset, counters} = this.props;

        return (
            <div className="row">
                <div className="col-8 offset-2">
                    <br/><br/>

                    <button className="btn btn-outline-primary" onClick={onReset}>Reset</button>
                    <br/><br/>
                    {
                        counters.map(counter =>
                            <Counter key={counter.id} onDelete={onDelete} counter={counter}
                                     onIncrement={onIncrement} onDecrement={onDecrement}>
                                <h5>Counter #{counter.id}</h5>
                            </Counter>
                        )
                    }
                </div>
            </div>
        );
    };
}
