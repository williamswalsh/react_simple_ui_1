// Need React library as h1 is not a string but a JSX which gets converted to react elements
import React, { Component } from "react";

// Class definition
// Component class has mutliple method that we want to inherit
class Counter extends Component {
  // local state - This is loaded only when Counter is created
  state = {
    count: this.props.counter.value,
    // imageUrl: "https://picsum.photos/200",
    // tags: [], //"tag1", "tag2", "tag3", "tag4"], // or []
  };
  //   Styles property applied to JSX expression
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  //   constructor() {
  //   Having this construcuctor makes "this" undefined
  //     super();
  //     // this.handleIncrement = this.handleIncrement.bind(this); // Provides new instance of function where this references Counter object
  //     // Can access "this" inside the constructor
  //     // console.log("Constructor: ", this);
  //   }

  render() {
    console.log("props", this.props);
    // Each JSX expression is mapped to a React.createElement() method
    return (
      // Can use React.Fragment
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        {/* Image */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* Just some formatted text */}
        {/* <span style={{ fontSize: 50 }}>Another Span</span> */}
        {/* Colour of Badge doesn't change */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}

        {/* Badge Colour does change  */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          // button handler with parameter
          //   onClick={() => this.handleIncrementWithParam(8)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // must use arrow function as are passing in parameter
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* Removed unordered list of elements */}
        {/* Can use map method with lambda to display multiple elements. WARN: When no key: "Each child in a list should have a unique "key" prop."*/}
        {/* <div>
          {this.state.tags.length === 0 && "Please create a new tag."}
          {this.renderTags()}
        </div> */}
      </div>
    );
  }

  // Rendering a list
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags.</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrementWithParam = (product_id) => {
    // Angular detects changes
    // React must explicity say what has change
    // inherit setState from Component
    this.setState({ count: this.state.count + 1 });
    console.log("Hello ", product_id);
  };

  handleIncrementNew = () => {
    // Angular detects changes
    // React must explicity say what has change
    // inherit setState from Component
    this.setState({ count: this.state.count + 1 });
  };

  // can use arrow function which has a reference to this object
  handleIncrement = () => {
    //   handleIncrement() {
    console.log("Increment clicked");
    console.log("this value: ", this);
    this.setState({ count: this.state.count + 1 });
    // obj.method() - in a method inside an obj this means -> the containing object
    // function()   - in a function this means -> in strict mode -> undefined, unstrict mode -> reference to window obj
    // bind method can be used
  };

  getBadgeClasses() {
    // let used when value is not constant
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //   Object destructuring
    //   Picking count property off the state object and storing it in a const called count
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  formatCountWithJSX() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

// Class export
export default Counter;
