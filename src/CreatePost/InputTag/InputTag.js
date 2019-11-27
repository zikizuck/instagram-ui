import React from 'react';
import './InputTag.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'


class InputTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
    }
        removeTag = (i) => {
            const newTags = [ ...this.state.tags ];
            newTags.splice(i, 1);
            this.setState({ tags: newTags });
        };

        inputKeyDown = (e) => {
            const val = e.target.value;
            if (e.key === 'Enter' && val) {
                if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                    return;
                }
                this.setState({ tags: [...this.state.tags, val]});
                this.tagInput.value = null;
            } else if (e.key === 'Backspace' && !val) {
                this.removeTag(this.state.tags.length - 1);
            }
        };

        render() {
            // const { tags } = this.state;

            return (
                <div className="input-tag">
                    <ul className="input-tag__tags">
                        { this.state.tags.map((tag, i) => (
                            <li key={tag}>
                                {tag}
                                <button type="button" onClick={() => { this.removeTag(i); }}><FontAwesomeIcon icon={faTimesCircle}/></button>
                            </li>
                        ))}
                        <input  type="text" onKeyDown={this.inputKeyDown} ref={c => {this.tagInput = c; }}  maxLength={20}/>
                    </ul>
                </div>
        );
    }
}

export default InputTag;