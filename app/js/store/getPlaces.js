import $ from 'jquery';

let url = 'http://terminal2.expedia.com/x/hotels?location=47.6063889,-122.3308333&radius=5km&dates=2016-05-19,2016-05-22&apikey=GsexYPAdw0stwqKBdqylck4hVhymqUlw';

function getAllHotels(callback) {
    $.ajax({
         type: 'GET',
         url: url,
         success: function(data) {
             console.log(data);
            callback(data);
         }
      });
}

export default getAllHotels;
