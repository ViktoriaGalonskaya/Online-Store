import React, {PureComponent} from 'react';
import { Link } from "react-router-dom";


class CartButton extends PureComponent{

    render(){
        return <div className="cart">
            <Link to="/bag" className="cart-button style-button-header">BAG (2)</Link>
        </div>
    }

}

export default CartButton;