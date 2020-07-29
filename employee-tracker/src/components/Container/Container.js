import React, {Component} from 'react';
import Input from '../Input/input';
import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';
import API from "../../utils/API";


class Container extends Component () {
    state = {
        results: [],
        userInput: ""
    }

    getEmployees() {
        API.getUsers
        .then(res => {
            this.setState({ res: res.data.results})
        })
    }
    
    handleInputChange = e => {
        const value = e.target.value;
        const search = e.target.search;
        this.setState({
            [search]: value
        })
    }
    
    render() {
    
    const employees = this.state.res;
    return (
        <div className = "container d-flex justify-content-center">
            <Input 
            value={this.state.search}
            handleInputChange = {this.handleInputChange} />
            <TableHead>
                {employees.map(employee => (
                    <TableBody
                    name={employee.name}
                    email={employee.email}
                    cell={employee.cell}
                    city={employee.city}
                    state={employee.state}
                    />
                ))}
            </TableHead>
        </div>
    )
}
}

export default Container;