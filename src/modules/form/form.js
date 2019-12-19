import React, {PureComponent} from 'react';
import Content from "../shared/content";
import "../../styles/form.scss";

class Form extends PureComponent {
    render (){

        const contentItem5 =  [
            {
                className: "form-content",
                title: `SIGN UP FOR UPDATES`,
                description: `Sign up for exclusive early sale access and tailored new arrivals.`,
            }
        ];

        return(
            <div className="main-form">
                <div className="main-form__info">
                    <Content content={contentItem5}/>
                </div>
                <div className="main-form__form">
                    <form action="" method="post" className="form">
                        <label htmlFor="form-input" className="form-label">
                            <input
                                className="form-input"
                                type="mail"
                                id="form-input"
                                placeholder="Your email address"
                            />
                            <button className="form-button">
                                JOIN
                            </button>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;