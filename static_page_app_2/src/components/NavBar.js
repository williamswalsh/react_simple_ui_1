import reactLogo from "../images/logo512.png"

function NavBar() {
  return (
    <nav className="nav">
      <img src={reactLogo} className="nav--icon" alt="React Logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  ) 
}
export default NavBar;
