import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

import registerServiceWorker from './registerServiceWorker';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

ReactDOM.render(<Router>
	<div>
	<Route exact path="/" component={App} />
	<Route path="/first-page" component={FirstPage} />
	<Route path="/second-page" component={SecondPage} />
	<Route path="/third-page" component={ThirdPage} />
	</div>
</Router>
	, document.getElementById('root'));
registerServiceWorker();
