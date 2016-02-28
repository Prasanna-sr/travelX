import React from 'react';

class ImageItem extends React.Component {
   render() {
       let details = this.props.details;
       let up = this.props.details.up || 0;
       let down = this.props.details.down || 0;
       let clickHandler = this.props.clickHandler;

      return (
          <li className="image">
          <img className="actualImage" src={details.newImageUrl}/>
          <div className="name">{details.Name}</div>
                <div className="interest">
                    <img data-id={details.id} className="up" onClick={clickHandler} src="/images/Thumbs-Up.png"></img>
                    <span>{up}</span>
                    <img  data-id={details.id} className="down" onClick={clickHandler}  src="/images/Thumbs-Down.png"></img>
                    <span>{down}</span>
                </div>
          </li>
      )
   }
}

export default ImageItem;
