import React from 'react';
import ImageItem from './ImageItem.jsx';
import store from './../store/getPlaces';
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
      store.getAllHotels(function(data) {
         let hotelsDetails = data.HotelInfoList.HotelInfo.slice(0, 4);
         for (let i = 0; i < hotelsDetails.length; i++) {
             let replaceStr = hotelsDetails[i].ThumbnailUrl.substring(hotelsDetails[i].ThumbnailUrl.indexOf('.jpg') - 2, hotelsDetails[i].ThumbnailUrl.indexOf('.jpg'));
             let newImageUrl = hotelsDetails[i].ThumbnailUrl.replace('_t', '_b');
            hotelsDetails[i].up = 0;
            hotelsDetails[i].down = 0;
            hotelsDetails[i].id = hotelsDetails[i].HotelID;
            hotelsDetails[i].newImageUrl = newImageUrl;
         }
         that.setState({hotelsDetails: hotelsDetails});
      });
      store.getAllPlaces(function(data) {
         let placesDetails = data.activities.slice(0, 4);
         for (let i = 0; i < placesDetails.length; i++) {
            placesDetails[i].up = 0;
            placesDetails[i].down = 0;
            placesDetails[i].Name = placesDetails[i].supplierName;
            placesDetails[i].newImageUrl = placesDetails[i].imageUrl;
         }
         that.setState({placesDetails: placesDetails});
      });
   }
   render() {
      let hotelsDetails = this.state.hotelsDetails;
      let placesDetails = this.state.placesDetails;
      let hotelsList;
      let placesList;
      let that = this;
      function clickHandler(e) {
         let id = $(e.target).data('id');
         if ($(e.target).hasClass('up')) {
            for (let i = 0; i < hotelsDetails.length; i++) {
               if (Number(hotelsDetails[i].id) === id) {
                   if(hotelsDetails[i].up === 1) {
                       hotelsDetails[i].up = 0;
                   } else {
                       hotelsDetails[i].up = 1;
                   }

               }
            }
         } else {
            for (let i = 0; i < hotelsDetails.length; i++) {
               if (Number(hotelsDetails[i].id) === id) {
                  if(hotelsDetails[i].down === 1) {
                      hotelsDetails[i].down = 0;
                  } else {
                      hotelsDetails[i].down = 1;
                  }
               }
            }
         }
         that.setState({hotelsDetails: hotelsDetails});
      }

      if (hotelsDetails) {
         hotelsList = hotelsDetails.map(function(details) {
            return (<ImageItem details={details} clickHandler={clickHandler}/>);
         });
      }

      if(placesDetails) {
          placesList = placesDetails.map(function(details) {
             return (<ImageItem details={details} clickHandler={clickHandler}/>);
          });
      }

      return (

         <div className="imageList">
            <ul>
               {hotelsList}
            </ul>
            <ul>
               {placesList}
            </ul>
         </div>


      )
   }
}

export default PlacesList;
