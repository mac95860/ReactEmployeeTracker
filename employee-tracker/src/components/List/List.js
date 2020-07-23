import React, { Component } from "react";
import API from "../../utils/API";

class EmployeeList extends Component {

    state = {
        search: "",
        results: []
    }

    searchAPI = query => {
        API.search(query)
            .then(res => {
                console.log(res);
                this.setState({ results: res.data })
            })
    }

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
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;