import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import PlacesList from './components/PlacesList.jsx';

render((
     <Router history = { browserHistory }>
         <Route path="/" component={PlacesList} />
    </Router>
), document.getElementById('places'))

import jquery from 'jquery';
setTimeout(function() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
        var accessToken = response.authResponse.accessToken;
        //  var authObj = FB.getAuthResponse();
         var url = 'https://graph.facebook.com/me?access_token=' + accessToken;
         jquery.ajax({
              type: 'GET',
              url: url,
              success: function(data) {
                  console.log(data);
                //  callback(data);
              }
           });
    //  }
      }
      else {
        FB.login();
      }
    });
},200);
