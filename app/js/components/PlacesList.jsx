import React from 'react';
import ImageItem from './ImageItem.jsx';

// import getAllHotels from './../store/getPlaces';

class PlacesList extends React.Component {
   render() {
       var images = [{url: 'test'},{url: 'test'},{url: 'test'},{url: 'test'},{url: 'test'}];

      var list = images.map(function(image) {
         return (<ImageItem details={image}/>);
      });
      console.log(list);
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
