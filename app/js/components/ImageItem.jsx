import React from 'react';

class ImageItem extends React.Component {
   render() {
       let details = this.props.details;
       let up = this.props.details.up || 0;
       let down = this.props.details.down || 0;
       console.log(up);
       let clickHandler = this.props.clickHandler;
    //    let up = this.
       let replaceStr = details.ThumbnailUrl.substring(details.ThumbnailUrl.indexOf('.jpg') - 2, details.ThumbnailUrl.indexOf('.jpg'));
       let newImageUrl = details.ThumbnailUrl.replace('_t', '_b');

      return (
          <li className="image">
          <img src={newImageUrl}/>
          <div className="name">{details.Name}</div>
                <div className="interest">
                    <img data-hotelid={details.HotelID} className="up" onClick={clickHandler} src="/images/Thumbs-Up.png"></img>
                    <span>{up}</span>
                    <img  data-hotelid={details.HotelID} className="down" onClick={clickHandler}  src="/images/Thumbs-Down.png"></img>
                    <span>{down}</span>
                </div>
          </li>
      )
   }
}

export default ImageItem;
