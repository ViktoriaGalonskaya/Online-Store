import React, {PureComponent} from 'react';
import Menu from "./menu";
import Facebook from "../../images/facebok.svg";
import Odnoclassniki from "../../images/odonklassniki.svg";
import Instagram from "../../images/instagram.svg";
import "../../styles/footer.scss";

class Footer extends PureComponent{

    render(){

        const menuList1 = [
            {
                url: 'contact',
                label: 'contact',
                icon: '',
            },
            {
                url: 'track-order',
                label: 'track order',
                icon: '',
            },
            {
                url: 'delivery-&-returns',
                label: 'delivery & returns',
                icon: '',
            },
            {
                url: 'payment',
                label: 'payment',
                icon: '',
            },
            {
                url: 'make-a-return',
                label: 'make a return',
                icon: '',
            },
            {
                url: 'faq',
                label: 'faq',
                icon: '',
            }
        ];

        const menuList2 = [
            {
                url: 'gift-vouchers',
                label: 'gift vouchers',
                icon: '',
            },
            {
                url: 'size-guide',
                label: 'size guide',
                icon: '',
            },
            {
                url: 'careers-modnikky',
                label: 'careers modnikky',
                icon: '',
            },
            {
                url: 'about-us',
                label: 'about us',
                icon: '',
            },
            {
                url: 'legal-policies',
                label: 'legal policies',
                icon: '',
            },
        ];

        const menuList3 = [
            {
                url: 'facebook',
                label: 'facebook',
                icon: Facebook,
            },
            {
                url: 'odnoklassniki',
                label: 'odnoklassniki',
                icon: Odnoclassniki,
            },
            {
                url: 'instagram',
                label: 'instagram',
                icon: Instagram,
            }
        ];

        const menuList4 = [
            {
                url: 'hello@modnikky.com',
                label: 'hello@modnikky.com',
                icon: '',
            },
            {
                url: '+7-910-832-26xx',
                label: '+7 910 832 26xx',
                icon: '',
            },
            {
                url: 'visit-us-at-Shalalaeva-23,Bologoe,Russia',
                label: 'visit us at Shalalaeva 23,\nBologoe,Russia',
                icon: '',
            }
        ];

        return <footer className="footer">
                <Menu menus={menuList1} title="CUSTOMER SERVICE"/>
                <Menu menus={menuList2} title="INFO"/>
                <Menu menus={menuList3} title="FOLLOW US"/>
                <Menu menus={menuList4} title="CONTACT US"/>
            </footer>
    }

}

export default Footer;
