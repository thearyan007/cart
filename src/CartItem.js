import React from "react";

class CartItem extends React.Component{

    render(){
        console.log("this.props", this.props)
        const { price, title, Qty } =this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Price: {price}</div>
                    <div style={{color:'#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/262/262038.png" 
                            onClick={()=>
                                this.props.onIncreaseQuantity(this.props.product)

                                }/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/659/659892.png" onClick={()=>{
                            this.props.onDecreaseQuantity(this.props.product)
                        }}/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={()=>{
                            this.props.onDeleteItem(this.props.product)
                        }}
                        />

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