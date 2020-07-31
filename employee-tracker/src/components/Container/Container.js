import React, { Component } from 'react';
import Input from '../Input/input';
import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';
import API from "../../utils/API";


class Container extends Component {
    state = {
        results: [],
        userInput: ""
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees() {
        API.getUsers()
            .then(({ data }) => {
                console.log(data.results);
                this.setState({ results: data.results });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
        const value = e.target.value;
        //const search = e.target.search;
        this.setState({
            userInput: value
        })
    }

    render() {

        const employees = this.state.results;
        return (
            <div className="container d-flex justify-content-center flex-column">
                <Input
                    value={this.state.search}
                    handleInputChange={this.handleInputChange} />
                <TableHead>
                    {
                        employees.map(employee => (
                            <TableBody
                                id={employee.id}
                                name={employee.name}
                                email={employee.email}
                                cell={employee.cell}
                                city={employee.city}
                                state={employee.state}
                            />
                        ))
                    }
                </TableHead>
            </div>
        )
    }
}

export default Container;