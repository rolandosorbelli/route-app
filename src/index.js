import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Contact from './Contact';

import registerServiceWorker from './registerServiceWorker';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

ReactDOM.render(<Router>
	<div>
	<Route exact path="/" component={App} />
	<Route path="/contact" component={Contact} />
	</div>
</Router>
	, document.getElementById('root'));
registerServiceWorker();
