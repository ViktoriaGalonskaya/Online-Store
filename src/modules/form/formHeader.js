import React, {PureComponent} from 'react';
import Search from "./search";
import SignIn from "./signIn";
import Like from "./like";
import CartButton from "./cartButton";
import "../../styles/formHeader.scss";

class FormHeader extends PureComponent{
    render (){
        return <div className="form-wrapper">
                <form action="" method="post" className="header-form">
                    <Search/>
                    <SignIn/>
                    <CartButton/>
                    <Like/>
                </form>
        </div>
    }
}

export default FormHeader;
