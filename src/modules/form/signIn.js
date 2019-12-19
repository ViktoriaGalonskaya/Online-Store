import React, {PureComponent} from 'react';
import { Link } from "react-router-dom";

class SignIn extends PureComponent{

    render(){
        return <div className="sign-in">
            <Link to="/" className="sign-in-button style-button-header">SIGN IN</Link>
        </div>
    }

}

export default SignIn;