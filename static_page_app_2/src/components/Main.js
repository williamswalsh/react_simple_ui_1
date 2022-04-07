import React from 'react'

function Main() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      {/* <img 
        className="partial-react-icon"
        src="../images/icon.png" 
        alt="My React Logo" />  */}
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}
export default Main;
