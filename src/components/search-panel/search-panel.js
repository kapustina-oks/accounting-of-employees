import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateValue = (e) => {
        this.setState({
            term: e.target.value
        });
        this.props.onUpdateValue(e.target.value);
    }

    render () {
        return (
            <input 
                type="text"
                className="form-control search-input"
                value={this.state.term}
                placeholder="Найти сотрудника"
                onInput={this.onUpdateValue}/>
    
        )
    }
}
    
export default SearchPanel;