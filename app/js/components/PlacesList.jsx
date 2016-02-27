import React from 'react';
import ImageItem from './ImageItem.jsx';
import getAllHotels from './../store/getPlaces';

class PlacesList extends React.Component {
    constructor() {
        super();
        this.state = {placesDetails: undefined};
    }
    componentDidMount() {
        var that = this;
        getAllHotels(function(data) {
            // if (that.isMounted()) {
            that.setState({placesDetails: data});
        //  }
        });
    }
   render() {
       let placesDetails;
       let list;
       if(this.state.placesDetails) {
            placesDetails = this.state.placesDetails.HotelInfoList.HotelInfo.slice(0,5);
           console.log(placesDetails);
          list = placesDetails.map(function(details) {
             return (<ImageItem details={details}/>);
          });
          console.log(list);
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
