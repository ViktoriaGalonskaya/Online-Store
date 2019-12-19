import React, {PureComponent} from 'react';
import Header from "../shared/header";
import Footer from "../shared/footer";
import Button from "../shared/button";
import Form from "../form/form";
import Ph1 from "../../images/photo1.jpg";
import Ph2 from "../../images/photo2.jpg";
import Maestro from "../../images/maestro-logo.svg";
import Visa from "../../images/visa-logo.svg";
import "../../styles/bag.scss";

class Bag extends PureComponent {
    render(){

        return (
            <div className="bag">
                <Header/>
                <div className="bag-collection">
                    <div className="bag-collection__header">
                        <h3 className="bag-collection__header-title">BAG</h3>
                        <span className="bag-collection__header-counter">2 items</span>
                    </div>
                    <div className="bag-collection__items">
                        <div className="bag-collection__item product">
                            <div className="bag-collection__item-photo product-photo">
                                <img src={Ph1} className="w100 product-photo__img" alt=""/>
                            </div>
                            <div className="bag-collection__item-info product-info">
                                <div className="product-info__title">
                                    WHITE BEAUTY MRS BLONDES MID LENGTH DENIM SHORT
                                </div>
                                <div className="product-info__price">
                                    USD $340.00
                                </div>
                                <div className="product-info__description">
                                    <div className="product-info__description-color">
                                        COLOR: WHITE
                                        <span className="down"></span>
                                    </div>
                                    <div className="product-info__description-size">
                                        SIZE: 2
                                        <span className="down"></span>
                                    </div>
                                    <div className="product-info__description-quantity">
                                        QUANTITY: 1
                                        <span className="down"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-remove">
                                <a href="#" className="product-remove__link"><span className="close"></span>REMOVE</a>
                            </div>
                        </div>
                        <div className="bag-collection__item product">
                            <div className="bag-collection__item-photo product-photo">
                                <img src={Ph2} className="w100 product-photo__img" alt=""/>
                            </div>
                            <div className="bag-collection__item-info product-info">
                                <div className="product-info__title">
                                    VICTORIOUS SPILT BACK TOP
                                </div>
                                <div className="product-info__price">
                                    USD $150.00
                                </div>
                                <div className="product-info__description">
                                    <div className="product-info__description-color">
                                        COLOR: YELLLOW
                                        <span className="down"></span>
                                    </div>
                                    <div className="product-info__description-size">
                                        SIZE: 1
                                        <span className="down"></span>
                                    </div>
                                    <div className="product-info__description-quantity">
                                        QUANTITY: 1
                                        <span className="down"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-remove">
                                <a href="#" className="product-remove__link"><span className="close"></span>REMOVE</a>
                            </div>
                        </div>
                    </div>
                    <div className="bag-collection__total">
                        <div className="bag-collection__total-summ">
                            Total USD $490.00
                        </div>
                        <div className="bag-collection__total-button">
                            <Button className="bag-collection__button" title="PROCEED TO CHECKOUT"/>
                        </div>
                        <div className="bag-collection__total-card">
                            <div className="bag-collection__total-card-photo">
                                <img src={Maestro} alt="" className="w100"/>
                            </div>
                            <div className="bag-collection__total-card-photo">
                                <img src={Visa} alt="" className="w100"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default Bag;