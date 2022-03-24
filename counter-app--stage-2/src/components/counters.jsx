import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    // very neat way to access all require parts of props
    // no need to use this.props.X, this.props.Y
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}

        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
      </div>
    );
  }
}
export default Counters;
