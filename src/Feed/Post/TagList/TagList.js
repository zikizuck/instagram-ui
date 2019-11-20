import React, {Component} from 'react';
import './Taglist.scss';
class TagList extends Component {
    render() {
        return (
            <div >
                {this.props.tags.map(tag => {
                    return <div className="tag"><a href="#">#{tag}</a></div>
                })}
            </div>
        );
    }
}

export default TagList;