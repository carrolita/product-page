import React, {Component} from "react"

class Item extends Component {

  render() {
    const title = this.props.title;
    const description = this.props.description;
    const imageUrl = this.props.imageUrl;
    const type = this.props.type;
    const substance = this.props.substance;
    const size = this.props.size;
    const numberInPack = this.props.numberInPack;
    const price = this.props.price;
    const deliveryTime = this.props.deliveryTime;

    return (
      <div className="item">
        <div className="item-description">
          <span>{description}</span>
          <div>
            <span className="item-price">{price}kr</span>
            <button className="item-button">köp</button>
          </div>
        </div>
        <div className="item-info">
          <div className="item-header">
            <span>{title}</span>
          </div>
          <div className="item-image">
            <img src={imageUrl}/>
          </div>
          <div>
            <span className="item-type">{type}</span>
          </div>
          <div>
            <span className="item-substance">{substance}</span>
          </div>
          <div>
            <span className="item-size">{size}</span>
          </div>
          <div>
            <span className="item-numberInPack">{numberInPack}
              i förpackningen</span>
          </div>
          <div>
            <span className="item-deliveryTime">{deliveryTime}</span>
          </div>
          <div>
            <span className="item-price">{price}kr</span>
            <button className="item-button">köp</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
