import React from 'react';

class ImageItem extends React.Component {
   render() {
       let details = this.props.details;
       let replaceStr = details.ThumbnailUrl.substring(details.ThumbnailUrl.indexOf('.jpg') - 2, details.ThumbnailUrl.indexOf('.jpg'));
       let newImageUrl = details.ThumbnailUrl.replace('_t', '_b');

      return (
          <li className="image">
          <img src={newImageUrl}/>
          <div className="name">{details.Name}</div>
                <div className="interest">
                    <img className="up" src="/images/Thumbs-Up.png"></img>
                    <img  className="down" src="/images/Thumbs-Down.png"></img>
                </div>
          </li>
      )
   }
}

export default ImageItem;
