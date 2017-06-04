import React from 'react';
import { render } from 'react-dom';
import { SkiDayCount } from './components/SkiDayCount';

// sometime errors pop up saying 'react isnt defined',
// adding this deals with it
window.React = React;

render(
	<SkiDayCount total={50}
               powder={20}
               backcountry={10}
               goal={100}
  />,
	document.getElementById('react-container')
)
