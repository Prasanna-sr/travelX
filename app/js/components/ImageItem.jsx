import React from 'react';

class ImageItem extends React.Component {
   render() {
       var details = this.props.details;

      return (
          <li className="image">
          <img src={details.url}/>
          <div>image</div>
          </li>
      )
   }
}

export default ImageItem;
