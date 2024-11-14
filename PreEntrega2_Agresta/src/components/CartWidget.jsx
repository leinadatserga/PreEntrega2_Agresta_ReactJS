const CartWidget = () => {
    const totalCart = ( quantity ) => {
        if ( quantity !== 0 ) return quantity;
    };
    return(
        <div className="cartWidget">
            {(( totalCart () !== 0 ) ? <button className="cantidad" >{ totalCart (0) }</button> : <button className="cantidad" ></button> )}
        </div>
    )
};

export default CartWidget;