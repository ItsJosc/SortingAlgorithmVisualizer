import React from 'react'

// Clock component with timer
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    componentDidMount() {
      this.timer = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timer);
    }
  
  
    render() {
      return (
        <div>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
      );
    }
  }

  export default Clock;