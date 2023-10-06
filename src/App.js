import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {getFirestore, collection, getDocs, onSnapshot}  from 'firebase/firestore'
import { initializeApp } from "firebase/app";

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
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


componentDidMount(){

    /* ---This is for older version of firebase---
    firebase
    .firestore()
    .collection("products")
    .get().then((snapshot)=>{
        console.log(snapshot)
    })
    */

   /* ________New Version Method_____
    const db = getFirestore();
    const colRef = collection(db, "products")
    getDocs(colRef).then((snapshot)=>{

        // snapshot.docs.forEach((doc)=>{
        //     console.log(doc.data())
        // })

        const products =snapshot.docs.map((doc)=>{
            const data= doc.data();
            data['id']=doc.id;

            return data
        })

        this.setState({
            products,
            loading:false
            
        })
    }).catch(err=>{
        console.log(err.message)
    })
    */

    //________adding handler for real time data collection__
    const db = getFirestore();
    const collRef = collection(db, "products")
    onSnapshot(collRef,(snapshot)=>{
        
        snapshot.docs.forEach((doc)=>{
            console.log(doc.data())
        })
        const products =snapshot.docs.map((doc)=>{
            const data= doc.data();
            data['id']=doc.id;

            return data
        })

        this.setState({
            products,
            loading:false
            
        })
    })
    
}

  render(){
    const {products, loading} = this.state;
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
        {loading && <h1>Loading products...</h1>}
        <div style={ {padding: 10, fontSize: 20} }>
            Total Cost: ₹{this.totalCartPrice()}
        </div>
      </div>
    );
  }
  
}

export default App;
