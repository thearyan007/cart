import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {getFirestore, collection, getDocs, addDoc, onSnapshot}  from 'firebase/firestore'
import { initializeApp } from "firebase/app";

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
    };
    const db = getFirestore();
    this.collRef = collection(db, "products")
    
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


   /* ________New Version Method for getting the data from firebase_____
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
    /*    added in the constructor
    const db = getFirestore();
    const collRef = collection(db, "products")*/
    onSnapshot(this.collRef,(snapshot)=>{

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
    addProduct=()=>{
        addDoc(this.collRef,{
            title:"Tablet",
            Qty:1,
            price:10999,
            img:""
        }).then((docRef)=>{
            console.log(docRef)
        }).catch((err)=>{
            console.log(err.message)
        })
    }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding:15, fontSize:20}}>Add product</button>
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
