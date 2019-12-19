import React, {PureComponent} from 'react';
import Header from "../shared/header";
import Menu from "../shared/menu";
import Footer from "../shared/footer";
import Form from "../form/form";
import Ph1 from "../../images/photo1.jpg";
import Ph2 from "../../images/photo2.jpg";
import Ph3 from "../../images/photo3.jpg";
import Ph4 from "../../images/photo4.jpg";
import "../../styles/catalog.scss";

class Catalog extends PureComponent {
    render(){

        const menuList = [
            {
                url: 'tops',
                label: 'TOPS',
                icon: '',
            },
            {
                url: 'tees-and-tanks',
                label: 'TEES AND TANKS',
                icon: '',
            },
            {
                url: '',
                label: 'SHIRTS',
                icon: '',
            },
            {
                url: '',
                label: 'DRESSES',
                icon: '',
            },
            {
                url: '',
                label: 'JACKETS',
                icon: '',
            },
            {
                url: '',
                label: 'KNITWEAR',
                icon: '',
            },
            {
                url: '',
                label: 'JUMPSUITS',
                icon: '',
            },
            {
                url: '',
                label: 'BOTTOMS',
                icon: '',
            },
            {
                url: '',
                label: 'INTIMATES',
                icon: '',
            },
            {
                url: '',
                label: 'SHORTS',
                icon: '',
            },
            {
                url: '',
                label: 'JEANS',
                icon: '',
            },
            {
                url: '',
                label: 'SKIRTS',
                icon: '',
            },
            {
                url: '',
                label: 'SALE',
                icon: '',
            },
            {
                url: '',
                label: 'SHOP ALL',
                icon: '',
            }
        ];

        return (
            <div className="catalog">
                <Header/>
                <div className="catalog-collection">
                    <div className="catalog-collection__menu">
                        <Menu menus={menuList} title="CATEGORIES"/>
                    </div>
                    <div className="catalog-collection__photos">
                        <div className="wrapper">
                            <img src={Ph1} className="w100" alt=""/>
                        </div>
                        <div className="wrapper">
                            <img src={Ph2} className="w100" alt=""/>
                        </div>
                        <div className="wrapper">
                            <img src={Ph3} className="w100" alt=""/>
                        </div>
                        <div className="wrapper">
                            <img src={Ph4} className="w100" alt=""/>
                        </div>
                        <div className="wrapper">
                            <img src={Ph1} className="w100" alt=""/>
                        </div>
                        <div className="wrapper">
                            <img src={Ph2} className="w100" alt=""/>
                        </div>
                        <div className="wrapper">
                            <img src={Ph3} className="w100" alt=""/>
                        </div>
                        <div className="wrapper">
                            <img src={Ph4} className="w100" alt=""/>
                        </div>
                    </div>
                </div>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default Catalog;