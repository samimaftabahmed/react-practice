import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component {

    render() {

        return (
            <div className="row">
                <div className="col-8 offset-2">
                    <br/><br/>

                    <button className="btn btn-outline-primary" onClick={this.props.onReset}>Reset</button>
                    <br/><br/>
                    {
                        this.props.counters.map(counter =>
                            <Counter key={counter.id} onDelete={this.props.onDelete}
                                     onIncrement={this.props.onIncrement}
                                     onDecrement={this.props.onDecrement} counter={counter}>
                                <h5>Counter #{counter.id}</h5>
                            </Counter>
                        )
                    }
                </div>
            </div>
        );

    };


}
