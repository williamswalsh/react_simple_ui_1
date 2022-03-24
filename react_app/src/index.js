
// Import Object from module
import React from 'react';
import ReactDOM from 'react-dom';

// new JS6 keywords
// const
// let
const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById('root'))
console.log(element);


// CMD+SHIFT+D -> Make chrome console go to horizontal
// Can see virtualDOM in chrome dev tools

// Whenever the state changes
// React will compare the new element with original element
// identify the changes
// 