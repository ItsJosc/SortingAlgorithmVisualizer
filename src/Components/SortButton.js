import React from 'react';
import {selectionSort} from './SortingAlgorithms';
import {displaySort} from './SortingAlgorithms';
import Button from 'react-bootstrap/Button';
import column from './Columns';

class SortButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: column,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.items = selectionSort(this.state.items);
        displaySort(this.state.items);
    }

    render() {
        return (
            <div >
                <Button variant="outline-primary" onClick={this.handleClick}>SORT</Button>
            </div>
        )
    }
}

export default SortButton;