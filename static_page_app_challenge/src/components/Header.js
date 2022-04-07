import reactLogo from "../images/logo512.png"

function Header() {
    return (
        <nav className="nav">
            <img
                src={reactLogo}
                className="nav--icon"
                alt="react logo" />
            <h3 className="nav--icon_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
};
export default Header;
