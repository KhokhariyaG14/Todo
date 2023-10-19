import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

var JSX =  (
            <>
            <h1 >Hello Index page1</h1>
            <ul>
              <li>Hello</li>
              <li>Hi</li>
              <li>Welcome</li>``
            </ul>
            </>)
var Data = <h1>DFD</h1>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App record={JSX} rData={Data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

