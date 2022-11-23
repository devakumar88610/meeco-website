import React from "react";
import { Employees } from "../data/navdata";

class Table extends React.Component {
  render() {
    return (
      <div className='container'>
        <table className='table table-hover mt-5'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((emp, index) => {
              return (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{emp.Name}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.Email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
