import React, {PureComponent} from 'react';
import ContentItem from "./contentItem";
import "../../styles/content.scss";

class Content extends React.PureComponent {
    render(){

        const {content} = this.props;

        return <div className="content">
                {content.map((item) => <ContentItem item={item} />)}
        </div>
    }
}

export default Content;