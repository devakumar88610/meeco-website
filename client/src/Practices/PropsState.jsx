import React from "react";

class PropsState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        Name: "",
        Salary: "",
        qty: 1,
      },
    };
  }

  nameHanler = () => {
    this.setState({item: {Name: "Gokul Raj"}});
  };
  salHanler = () => {
    this.setState({item: {Salary: 35000}});
  };

  incrHanlder = () => {
    this.setState({item: {...this.state.item, qty: this.state.item.qty + 1}});
  };

  decrHanlder = () => {
    console.log("text");
    this.setState({item: {...this.state.item, qty: this.state.item.qty - 1}});
  };

  render() {
    return (
      <div className='container'>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className='row'>
          <div className='col-md-6'>
            <h1>Name: {this.state.item.Name}</h1>
            <h1>Salary: {this.state.item.Salary}</h1>
            <button className='btn btn-mycolor mr-2' onClick={this.nameHanler}>
              Name
            </button>
            <button className='btn btn-mycolor' onClick={this.salHanler}>
              Salary
            </button>
          </div>

          <div className='col-md-6'>
            <h5>
              <i
                class='fa-solid fa-circle-minus btn mr-3'
                onClick={this.decrHanlder}
              ></i>
              {this.state.item.qty}
              <i
                class='fa-solid fa-circle-plus btn ml-3'
                onClick={this.incrHanlder}
              ></i>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default PropsState;
