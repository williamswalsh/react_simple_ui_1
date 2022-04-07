import ReactDOM from 'react-dom';
import './index.css';

// Declarative style
// Not telling JS how to exactly represent the webpage conten
const element = <ul><li>A</li><li>B</li></ul>
console.log(element);
// ReactDOM.render(element, document.getElementById('root'));

// Challenge
function MyPage() {
  <>
    <header>
      <nav>
        <h1>website</h1>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    
    <div>
      This is inside a div.
    </div>
  </>
}
// document.getElementById("root").append(page);  // -> [object Object]
// document.getElementById("root").append(JSON.stringify(page));

// Intereprets React HTML objects - outputs html
ReactDOM.render(<MyPage />, document.getElementById("root"));

// Imperative style
// const h1_element = document.createElement("h1");
// h1_element.textContent = "This h1 text was set using plain JS."
// h1_element.className="header"
// document.getElementById("root").append(h1_element);
