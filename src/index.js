import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';

// sometime errors pop up saying 'react isnt defined',
// adding this deals with it
window.React = React;

render(
	<Router history={hashHistory}>
		<Route path='/' component={App} />
		{/* if anyone goes to a page other then home,
		//they'll see Whoops404 component */}
		<Route path='*' component={Whoops404} />
	</Router>,
	document.getElementById('react-container')
)
