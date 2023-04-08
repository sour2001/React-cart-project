
import React from "react";
const CartItem = (props) => {
    const {title, price, qty} = props.product;
    const {product, onDecreaseQuantity, onIncreaseQuantity, onDeleteProduct} = props
    return (
        <div className="cart-item">
                 <div className="left-block">
                    {/* now here we are using the style prop inside the img using style prop and gave the class name */}
                    <img alt="image1" src={product.img} style={styles.image} />  
                    

                </div>
                <div className="right-block ">
                    {/* <div>Phone</div> */}
                    {/* <div style={ { fontSize: 30 } }>{this.state.title}</div> */}
                    <div style={ { fontSize: 30 } }>{title}</div>
                    <div style={ { color: 'black' } }>${price} </div>
                    <div style={ { color: 'black' } }>Qty: {qty} </div>

                    <div className="cart-item-action">
                        {/* {Buttons} */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/148/148764.png" 
                        //adding onClickk function
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png" 

                        onClick={() => onDecreaseQuantity(product)}
                        />

                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" 
                        onClick={() => onDeleteProduct(product.id)}
                        
                        />
                    </div>

                    {/* <div className="button-action"  >
                        <button onClick={showAlert}> Alert </button>
                    </div> */}
                </div>

        </div>
            
    );
}
const styles = {
    image: {
        height: 150,
        width: 150,
        borderRadius: 85,
        border: 'solid',
        background: '#ccc'
    }
}

export default CartItem;