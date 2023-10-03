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

    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id} />
                })}
            </div>
        )
    }
}


export default Cart;