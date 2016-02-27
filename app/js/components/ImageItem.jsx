import React from 'react';

class ImageItem extends React.Component {
   render() {
       var details = this.props.details;
    //    var imageUrl = details.ThumbnailUrl
      return (
          <li className="image">
          <img src={details.ThumbnailUrl}/>
          <div>{details.Name}</div>
          </li>
      )
   }
}

export default ImageItem;
