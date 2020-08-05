import React, { Component } from 'react';
import Input from '../Input/input';
import TableHead from '../TableHead/TableHead';
import API from "../../utils/API";


class Container extends Component {
    state = {
        results: null,
        users: null
    }

    // sort = addEventListener;

    handleInputChange = e => {
        const value = e.target.value;
        const searchUser = this.state.results.filter(user => {
            let values = Object.values(user)
            .join("")
            .toLowerCase();
            return values.indexOf(value.toLowerCase()) !== -1;
        })
        this.setState({
            users: searchUser
        })
    }

    componentDidMount() {
        API.getUsers()
            .then(({ data }) => {
                this.setState({ 
                    results: data.results,
                    users: data.results
                 });
            })
            .catch(err => console.log(err));
    }

    render() {

        const results = this.state.users;
        return (
            <div className="container d-flex justify-content-center flex-column">
                <Input handleInputChange={this.handleInputChange} />

                {results && <TableHead results={results}/> }
            </div>
        )
    }
}

export default Container;