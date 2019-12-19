import React, {PureComponent} from 'react';
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";

class Like extends PureComponent{

    render(){
        return <div className="like">
            <Link to="/" className="like-button style-button-header">
                <Icon.Heart className="like-img"/>
            </Link>
        </div>
    }

}

export default Like;