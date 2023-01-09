import React from 'react';
import '../bars.css';

function DisplaySorted(props) { //props: items,
    const nums = props.items;
    let numsGraph = [];
    for (let i = 0; i < nums.length; i++) {

        let ht = `${nums[i] * 2}%`
        let style = {
            height: ht
        };

        numsGraph[i] = (<div className='bar' style={style} key={i}></div>)
    }
    // const numsGraph = nums.map((number) => {
    //     let barHeight = `${number}%`;
    //     <div className='bar' height={barHeight}></div>
    // })
    console.log(numsGraph);
    return (
        numsGraph
    );
}

class Display extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };
        console.log("WORKING");
    }

    render() {
        return (
            <div className='bars-container'><DisplaySorted items={this.props.items}/></div>
        )
    }
}

export {DisplaySorted, Display as default};