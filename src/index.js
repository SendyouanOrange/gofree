import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));


if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept()
    }
}
