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
            that.setState({placesDetails: data});
        });
    }
   render() {
       let placesDetails;
       let list;
       if(this.state.placesDetails) {
            placesDetails = this.state.placesDetails.HotelInfoList.HotelInfo.slice(0,5);
          list = placesDetails.map(function(details) {
             return (<ImageItem details={details}/>);
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
