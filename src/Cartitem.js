import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

  render() {
    const{price, title, qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
            <img style={styles.image} alt="" />
         
        </div>
        <div className="right-block">
            <div style={{ fontSize: 25 }}>{title}</div>
            <div style={{ color: '#777' }}>{price}</div>
            <div style={{ color: '#777' }}>{qty}</div>

          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" />
            <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" />
            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;

