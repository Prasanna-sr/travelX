import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import PlacesList from './components/PlacesList.jsx';

render((<Router history = {browserHistory}>
     <Route path="/" component={PlacesList}/></Router>
), document.getElementById('places'))


setTimeout(function() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
        var accessToken = response.authResponse.accessToken;
        //  var authObj = FB.getAuthResponse();
         var url = 'https://graph.facebook.com/me?access_token='
          + accessToken;
 $.ajax({
      type: 'GET',
      url: url,
      success: function(data) {
         console.log(data);
      }
   });
} else {
FB.login();
}});
},
200);

$(document).ready(function() {
    //notification js
    $("#notificationContainer").hide();

    $(document).click(function() {
            $("#notificationContainer").hide();
    });
    console.log('click')
    $(".activity div").click(function() {
        console.log('clokc')
        $("#notificationContainer").fadeToggle(300);
        $("#notification_count").fadeOut("slow");
        return false;
    });


    //Modal js

    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
$(document).click('.actualImage', function() {
    console.log('imAAGEE');
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
$(document).click('.close', function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});
