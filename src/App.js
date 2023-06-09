import React from "react";
// import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then(snapshot => {
  //       const products = snapshot.docs.map(doc => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });
  //       this.setState({ products: products, loading: false });
  //     });
  // }
  this.db
  .collection("products")
  // .where("price", ">", 900)
  // .where("title", "==", "Washing Machine")
  .orderBy("price", "asc")
  .onSnapshot((snapshot) => { 
    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data["id"] = doc.id;
      return data;
    });
    this.setState({ products: products, loading: false });
  });
}


  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //   products
    // });

    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log("Updated Successfully");
      }
      )
      .catch(error => {
        console.log("Error: ", error);
      }
      );

  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // if (products[index].qty === 0) {
    //   return;
    // }
    // products[index].qty -= 1;

    // this.setState({
    //   products
    // });
    const docRef = this.db.collection("products").doc(products[index].id);
    if (products[index].qty === 0) {
      return;
    }
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log("Updated Successfully");
      }
      )
      .catch(error => {
        console.log("Error: ", error);
      }
      );
  };

  handleDeleteProduct = id => {
    // const { products } = this.state;

    // const items = products.filter(product => product.id !== id);

    // this.setState({
    //   products: items
    // });

    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Deleted Successfully");
      }
      )
      .catch(error => {
        console.log("Error: ", error);
      }
      );

  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 9000,
        qty: 3,
        title: "Mobile Phone"
      })
      .then(docRef => {
        console.log("Product has been added", docRef);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  
  };


  render() {
    const { products, loading } = this.state;
    return (

      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>Add a product</button>
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
