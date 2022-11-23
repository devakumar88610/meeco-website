import React from "react";

class DigitalTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      name: "Rajini Kanth, Priyanka, Rahul :)",
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({time: new Date().toLocaleTimeString()});
    }, 1000);

    setTimeout(() => {
      this.setState({name: new Date().toLocaleDateString});
    }, 5000);
  };

  render() {
    return (
      <>
        <div style={{backgroundColor: "#0298CA"}} className='text-white p-5'>
          <h3>Digital Time: {this.state.time}</h3>
          <h3>Hello Mr. {this.state.name}</h3>
        </div>
      </>
    );
  }
}

export default DigitalTime;
