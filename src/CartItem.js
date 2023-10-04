import React from "react";

const CartItem =(props)=>{
        console.log("this.props", props)
        const { price, title, Qty } =props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} src={props.product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Price: {price}</div>
                    <div style={{color:'#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/262/262038.png" 
                            onClick={()=>
                                props.onIncreaseQuantity(props.product)

                                }/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/659/659892.png" onClick={()=>{
                            props.onDecreaseQuantity(props.product)
                        }}/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={()=>{
                            props.onDeleteItem(props.product)
                        }}
                        />

                    </div>
                </div>
            </div>
        )
    
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