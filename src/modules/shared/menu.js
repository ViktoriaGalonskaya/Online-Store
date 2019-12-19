import React, {PureComponent} from 'react';
import { Link } from "react-router-dom";
import "../../styles/menu.scss";

class Menu extends React.PureComponent{
    render() {

        const {menus} = this.props;

        return <div className={`menu-wrapper`}>
            <div className="menu-title">{this.props.title}</div>
            <ul className="menu">
                {menus.map((value, index) => {
                    return <li key={index} className="menu__item"><MenuItem item={value}/></li>
                })}
            </ul>
        </div>
    }
}

class MenuItem extends React.PureComponent {
    render(){

        const { item } = this.props;

        return (
            <Link className="menu__link" to={item.url.toLowerCase()}>
                {item.icon && <span className="menu__icon"/>}
                {item.label}
            </Link>
        )
    }
}

export default Menu;
