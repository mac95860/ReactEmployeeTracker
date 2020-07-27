import React, {Component} from 'react';
import Input from '../Input/input';
import EmployeeList from '../List/List'


class Container extends Component () {
    
    handleInputChange = e => {
        const value = e.target.value;
        const search = e.target.search;
        this.setState({
            [search]: value
        })
    }
    
    render() {
    return (
        <div className = "container d-flex justify-content-center">
            <Input 
            value={this.state.search}
            handleInputChange = {this.handleInputChange} />
            <EmployeeList />
        </div>
    )
}
}

export default Container;