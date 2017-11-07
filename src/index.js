import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import NotFound from './NotFound';

import registerServiceWorker from './registerServiceWorker';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

ReactDOM.render(<Router>
	<Switch>
		<Route exact path="/" component={App} />
		<Route path="/first-page" component={FirstPage} />
		<Route path="/second-page" component={SecondPage} />
		<Route path="/third-page" component={ThirdPage}>
			<Route path="/third-page/:id" component={FourthPage} />
		</Route>
		<Route path="*" component={NotFound} />
	</Switch>
</Router>
	, document.getElementById('root'));
registerServiceWorker();
