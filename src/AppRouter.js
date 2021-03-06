import React from 'react';
import {
	BrowserRouter as Router,
	Route, 
	Switch
} from 'react-router-dom';
import { Home } from './pages';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default AppRouter;