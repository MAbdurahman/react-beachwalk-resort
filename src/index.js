import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

//****************Variables ****************//
const rootId = document.getElementById('root');

//****************Functions ****************//
function render() {
	ReactDOM.render(<App/>, rootId);
}

if (module.hot) {
	module.hot.accept('./app/App', function () {
		setTimeout(render);
	});
}

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
