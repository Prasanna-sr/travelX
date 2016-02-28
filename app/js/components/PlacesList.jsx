import React from 'react';
import ImageItem from './ImageItem.jsx';
import getAllHotels from './../store/getPlaces';
import $ from 'jquery';
class PlacesList extends React.Component {
   constructor() {
      super();
      this.state = {
         placesDetails: undefined
      };
   }
   componentDidMount() {
      var that = this;
      getAllHotels(function(data) {
         let placesDetails = data.HotelInfoList.HotelInfo.slice(0, 4);
         for (let i = 0; i < placesDetails.length; i++) {
            placesDetails[i].up = 0;
            placesDetails[i].down = 0;
         }
         that.setState({placesDetails: placesDetails});
      });
   }
   render() {
      let placesDetails = this.state.placesDetails;
      let list;
      let that = this;
      function clickHandler(e) {
         let hotelId = $(e.target).data('hotelid');
         if ($(e.target).hasClass('up')) {
            for (let i = 0; i < placesDetails.length; i++) {
               if (Number(placesDetails[i].HotelID) === hotelId) {
                  placesDetails[i].up++;
               }
            }
         } else {
            for (let i = 0; i < placesDetails.length; i++) {
               if (Number(placesDetails[i].HotelID) === hotelId) {
                  placesDetails[i].down++;
               }
            }
         }
         that.setState({placesDetails: placesDetails});
      }

      if (this.state.placesDetails) {
         list = this.state.placesDetails.map(function(details) {
            return (<ImageItem details={details} clickHandler={clickHandler}/>);
         });
      }

      return (

         <div className="imageList">
            <ul>
               {list}
            </ul>
         </div>
      )
   }
}

export default PlacesList;
