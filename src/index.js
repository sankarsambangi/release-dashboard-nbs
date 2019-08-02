import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


fetch(`${process.env.PUBLIC_URL}/data/output.json`)
.then((r) => r.json())
.then((data) =>{
    ReactDOM.render(<App response={data}/>, document.getElementById('root'));
})
  
//ReactDOM.render(  <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
