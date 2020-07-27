import React, { Component } from "react";
import API from "../../utils/API";

class EmployeeList extends Component {

    state = {
        search: "",
        results: []
    }

    searchAPI = () => {
        API.getUsers()
            .then(res => {
                console.log(res);
                this.setState({ results: res.data })
            })
    }

    employee = this.state.results;

    render() {
        return (
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">cell</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                
                <tbody>
                   {/* map through the data to generate new list component for each person */}
                   {this.employee.map(employee => (
                       <tr key={employee.id}>
                          <th scope={"row"}>{employee.id}</th>
                          <td>{employee.name}</td>
                          
                       </tr>
                   ))}
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;