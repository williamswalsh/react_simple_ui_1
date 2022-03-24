import React, { Component } from "react";

// stateless functional component - don't have this keyword
// must pass in props like: const NavBar = (props) =>
// no state
//
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="https://google.com">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// stateless functional component
// Cannot use lifecycle hooks
// can use object destructuring(NB:{totalCounters}) to break down props to retrieve specific data part
// totalCounters is taken from props
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://google.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
