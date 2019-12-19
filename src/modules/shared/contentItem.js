import React from 'react';

const ContentItem = ({item}) => {

    return(
        <div className='content-item'>
            <div className="content-item__title">{item.title}</div>
            <div className="content-item__description">{item.description}</div>
        </div>
    )
};

export default ContentItem;
