import React from 'react';
import Button from 'react-bootstrap/Button';
import {shuffle} from './SortingAlgorithms';
import {displaySort} from './SortingAlgorithms';
import column from './Columns';

class ShuffleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: column,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.items = shuffle(this.state.items);
        displaySort(this.state.items);
    }

    render() {
        return (
            <div >
                <Button variant="outline-primary" onClick={this.handleClick}>Shuffle</Button>
            </div>
        )
    }
}

export default ShuffleButton;