import React, { Component } from "react";

class TableHead extends Component {

    constructor (props) {
        super(props)
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
                
               {this.props.children}
            </table>
        );
    }
}

export default TableHead;