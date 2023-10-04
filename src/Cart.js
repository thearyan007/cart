import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[{
                price: 15999,
                title: "Phone",
                Qty: 1,
                img:"",
                id:1
            },{
                price: 5999,
                title: "watch",
                Qty: 1,
                img:"",
                id:2

            },{
                price: 999,
                title: "charger",
                Qty: 1,
                img:"",
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

    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return (<CartItem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={this.handleIncreaseQty} 
                    onDecreaseQuantity={this.handleDecreaseQty}
                    onDeleteItem={this.deleteItem}
                    />)
                })}
            </div>
        )
    }
}


export default Cart;