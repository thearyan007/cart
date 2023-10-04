import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[{
            price: 45999,
            title: "Phone",
            Qty: 1,
            img:"https://www.91-img.com/pictures/143993-v4-apple-iphone-14-mobile-phone-large-4.jpg",
            id:1
        },{
            price: 5999,
            title: "watch",
            Qty: 1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fVUBh01LEW5149n-FRuY7wT2t01qVwQrWemCzgrVlHGHNrX4PIowl-FyoS0GvT92lAs&usqp=CAU",
            id:2

        },{
            price: 999,
            title: "charger",
            Qty: 1,
            img:"https://m.media-amazon.com/images/I/61NfFCwsneL._AC_UF1000,1000_QL80_.jpg",
            id:3

        }
    ]
    }
    
}
handleIncreaseQty=(product)=>{
    const index = this.state.products.indexOf(product);
    this.state.products[index].Qty+=1;
    this.setState({
        products:this.state.products
    })
}
handleDecreaseQty=(product)=>{
    const index = this.state.products.indexOf(product);
    if(this.state.products[index].Qty!=1){
        this.state.products[index].Qty-=1;
        this.setState({
            products:this.state.products
        })
    }else if(this.state.products[index].Qty=1){
        if(window.confirm("Are you sure you want to remove this item from your cart?")){
            this.deleteItem(product)
        }
    }
    
}
deleteItem=(product)=>{
    const index = this.state.products.indexOf(product);
    this.state.products.splice(index,1);
    this.setState({
        products:this.state.products
    })
}

getCartCount=() =>{
    const {products} = this.state;
    let count =0;
    products.forEach((product) => {
        count+=product.Qty;
    });
    return count;

}

totalCartPrice=()=>{
    const {products} =this.state;
    let totalPrice=0; 
    products.forEach((product)=>{
        totalPrice+= product.Qty*product.price;
    })
    return totalPrice;
}


  render(){
    const {products} = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products} 
          onIncreaseQuantity={this.handleIncreaseQty} 
          onDecreaseQuantity={this.handleDecreaseQty}
          onDeleteItem={this.deleteItem}
        />
        <div style={ {padding: 10, fontSize: 20} }>
            Total Cost: ₹{this.totalCartPrice()}
        </div>
      </div>
    );
  }
  
}

export default App;
