import React, {PureComponent} from 'react';
import Header from "../shared/header";
import Footer from "../shared/footer";
import Form from "../form/form";
import "../../styles/bag.scss";

class CustomerService extends PureComponent {
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
            }
        ];

        return (
            <div className="customer-service">
                <Header/>
                <div className="">

                </div>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default CustomerService;