import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // props are read-only
  // Unaccessible to other components
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called");
    console.log("counterId:", counterId);

    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          // selected property meaning ???
          <Counter
            key={counter.id} // Duplication? key/id
            // id={counter.id} // Used by react not accessible from our code
            onDelete={this.handleDelete} // fx
            // value={counter.value}
            counter={counter}
          />
        ))}

        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
