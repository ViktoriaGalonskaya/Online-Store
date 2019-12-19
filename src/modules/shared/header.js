import React, {PureComponent} from 'react';
import Menu from "../shared/menu";
import "../../styles/header.scss";
import Logo from "./logo";
import FormHeader from "../form/formHeader";

class Header extends PureComponent{

    render(){

        const menuList = [
            {
                url: 'collections',
                label: 'new arrivals',
                icon: ''
            },
            {
                url: 'collections',
                label: 'shop',
                icon: ''
            },
            {
                url: 'collections',
                label: 'COLLECTIONS',
                icon: ''
            }
        ]

        return <header className="header">
                <Menu menus={menuList}/>
                <Logo className="header-logo"/>
                <FormHeader/>
            </header>
    }

}

export default Header;