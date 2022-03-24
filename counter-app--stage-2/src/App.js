import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  // called once - correct place to init component
  constructor(props) {
    super(props);
    console.log('App - Constructor', this.props)

    // Can set directly in constructor with setState method
    // setState - can only be called when a component is rendered & placed in the DOM
    // this.state = this.props.something
  }

  // Mounted - App is mounted in the DOM
  // VDOM added to DOM
  componentDidMount() {
    // Ajax Call
    console.log('App - Mounted')
  }


  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    // You get clone of counter by using index
    // you store this in the counters array
    // Then you increment value on clone
    // then you set state
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
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
    console.log('App - Rendered') 
    // Returns React Element - VDOM
    // VDOM compared with original VDOM - Delta id'd
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length}/>
        <main className='container'>
          <Counters 
              counters={this.state.counters} // Passing in the data
              onReset={this.handleReset}     // Passing in the handle
              onIncrement={this.handleIncrement} 
              onDelete={this.handleDelete}
            />
        </main>
      </React.Fragment>
  );
  }
}

export default App;
