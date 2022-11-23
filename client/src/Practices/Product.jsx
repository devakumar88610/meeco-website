import React, {Component} from "react";
import Axios from "axios";
export class Product extends Component {
  state = {
    products: ["Hello"],
  };
  componentDidMount() {
    Axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then((resp) => {
        this.setState({products: resp.data});
      })
      .catch();
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.products)}</pre>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.length > 0 ? (
                    <>
                      {this.state.products.map((product) => {
                        return (
                          <tr>
                            <td>{product.city}</td>
                            <td>{product.name}</td>
                          </tr>
                        );
                      })}
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
