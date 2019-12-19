import React, {PureComponent} from 'react';
import * as Icon from 'react-feather';

class Search extends PureComponent{
    render(){
        return <div className="search">
                <label className="search-label" htmlFor="search-input">
                    <div className="search-images">
                        <Icon.Search className="search-img"/>
                    </div>
                    <input
                        className="search-input"
                        type="search"
                        value=""
                        id="search-input"
                        placeholder="SEARCH"
                    />
                </label>
            </div>
    }
}

export default Search;
