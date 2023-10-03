import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price: 15999,
            title: "Phone",
            Qty: 1,
            img:"",
        }
        // this.increaseQty= this.increaseQty.bind(this);
    }
    increaseQty=() => {
        this.setState({
            Qty: this.state.Qty+1
        })
    }
    decreaseQty=()=>{
        this.setState((preState)=>{
            return {
                Qty: preState.Qty-1
            }
        })

    }

    render(){
        const {price, title, Qty} =this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Price: {price}</div>
                    <div style={{color:'#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/262/262038.png" onClick={this.increaseQty}/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/659/659892.png" onClick={this.decreaseQty}/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>

                    </div>
                </div>
            </div>
        )
    }
}

const styles= {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor:'#777'
    }
}

export default CartItem;