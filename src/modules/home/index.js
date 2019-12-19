import React, {PureComponent} from 'react';
import Header from "../shared/header";
import Footer from "../shared/footer";
import Content from "../shared/content";
import Button from "../shared/button";
import Form from "../form/form";
import Photo1 from "../../images/photo1.jpg";
import Photo2 from "../../images/photo2.jpg";
import Photo3 from "../../images/photo3.jpg";
import Photo4 from "../../images/photo4.jpg";
import { Link } from "react-router-dom";
import '../../styles/home.scss';

class Home extends PureComponent {
    render(){

        const contentItem1 =  [
            {
                className: "home-collection__content",
                title: "NEW COLLECTION",
                description: `Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool.`,
            }
        ];

        const contentItem2 =  [
            {
                title: `VINTAGE INSPIRED`,
                description: `Inspired by the ‘70s and 80’s), we know that if you sift through our vintage inspired collection you’re gonna rock the perfect silhouette.`,
            }
        ];

        const contentItem3 =  [
            {
                title: `SUSTAINABLE DENIM`,
                description: `What started as a true ‘80s vintage pair of jeans, \n finished as a re-energised, wider leg vintage jean with versatile detailing.`,
            }
        ];

        const contentItem4 =  [
            {
                title: `PRAY FOR ROCK`,
                description: `Beloved and forever relevant, there’s a convenience factor in a well-built pair of all-in-ones.`,
            }
        ];

        return (

            <div className="home">
                <Header/>
                <div className="home-collection">
                    <div className="home-collection__bg home-collection--1">
                        <div className="home-collection__info home-collection__info--pos-left-bottom w50">
                            <Content className="home-collection__content" content={contentItem1}/>
                            <Button title="SHOP NEW ARRIVALS" className="home-collection__button"/>
                        </div>
                    </div>
                </div>
                <div className="home-collection">
                    <div className="home-collection__bg home-collection--2">
                        <div className="home-collection__info home-collection__info--pos-left-top w50">
                            <Content className="home-collection__content" content={contentItem2}/>
                            <Button title="SHOP NOW" className="home-collection__button"/>
                        </div>
                    </div>
                </div>
                <div className="home-collection home-collection--row">
                    <div className="home-collection__photo">
                        <img src={Photo1} alt="" className="w100"/>
                    </div>
                    <div className="home-collection__photo">
                        <img src={Photo2} alt="" className="w100"/>
                    </div>
                    <div className="home-collection__photo">
                        <img src={Photo3} alt="" className="w100"/>
                    </div>
                </div>
                <div className="home-collection">
                    <div className="home-collection__bg home-collection--3">
                        <div className="home-collection__info home-collection__info--pos-left-top w50">
                            <Content className="home-collection__content" content={contentItem3}/>
                            <Button title="SHOP DENIM" className="home-collection__button"/>
                        </div>
                    </div>
                </div>
                <div className="home-collection">
                    <div className="home-collection__arrivals arrivals outer">
                        <div className="arrivals-links">
                            <a href="#" className="arrivals-links__link">new arrivals</a>
                        </div>
                        <div className="arrivals-photos home-collection--row">
                            <div className="arrivals-photos__photo">
                                <img src={Photo1} alt="" className="w100"/>
                            </div>
                            <div className="arrivals-photos__photo">
                                <img src={Photo2} alt="" className="w100"/>
                            </div>
                            <div className="arrivals-photos__photo">
                                <img src={Photo3} alt="" className="w100"/>
                            </div>
                            <div className="arrivals-photos__photo">
                                <img src={Photo4} alt="" className="w100"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-collection">
                    <div className="home-collection__bg home-collection--4">
                        <div className="home-collection__info home-collection__info--pos-right-bottom">
                            <Content className="home-collection__content" content={contentItem4}/>
                            <Button title="SHOP COLLECTION" className="home-collection__button"/>
                        </div>
                    </div>
                </div>
                <div className="home-collection">
                    <div className="home-collection__shop outer shop">
                        <div className="shop-links">
                            <Link to="/collections" className="shop-links__link">SHOP INSTAGRAM</Link>
                            <Link to="/collections" className="shop-links__link shop-links__link--arrow">SHOP</Link>
                        </div>
                        <div className="shop-photos home-collection--row">
                            <div className="w50">
                                <img src={Photo1} alt="" className="w100"/>
                            </div>
                            <div className="w50">
                                <div className="home-collection--row">
                                    <div className="">
                                        <img src={Photo2} alt="" className="w100"/>
                                    </div>
                                    <div className="">
                                        <img src={Photo3} alt="" className="w100"/>
                                    </div>
                                </div>
                                <div className="home-collection--row">
                                    <div className="">
                                        <img src={Photo3} alt="" className="w100"/>
                                    </div>
                                    <div className="">
                                        <img src={Photo4} alt="" className="w100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop-links">
                            <Link to="/collections" className="shop-links__link">#MODNIKKY</Link>
                        </div>
                    </div>
                </div>
                <div className="home-form">
                    <Form/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;