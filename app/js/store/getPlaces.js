import $ from 'jquery';

let hotelsUrl = 'http://terminal2.expedia.com/x/hotels?location=47.6063889,-122.3308333&radius=5km&dates=2016-05-19,2016-05-22&apikey=GsexYPAdw0stwqKBdqylck4hVhymqUlw';

let placesUrl = 'http://terminal2.expedia.com/x/activities/search?location=SanJose&startDate=2016-03-08&endDate=2016-03-18&apikey=GsexYPAdw0stwqKBdqylck4hVhymqUlw';

function getAllHotels(callback) {
   $.ajax({
      type: 'GET',
      url: hotelsUrl,
      success: function(data) {
         callback(data);
      }
   });
}


function getAllPlaces(callback) {
   $.ajax({
      type: 'GET',
      url: placesUrl,
      success: function(data) {
         callback(data);
      }
   });
}

export default {
   getAllHotels: getAllHotels,
   getAllPlaces: getAllPlaces
};
