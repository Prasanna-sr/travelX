import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import PlacesList from './components/PlacesList.jsx';

render((
     <Router history = { browserHistory }>
         <Route path="/" component={PlacesList} />
    </Router>
), document.getElementById('places'))
