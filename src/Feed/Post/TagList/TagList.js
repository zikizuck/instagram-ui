import React, {Component} from 'react';

class TagList extends Component {
    render() {
        return (
            <div>
               <div>{this.props.children}</div>


            </div>
        );
    }
}

export default TagList;