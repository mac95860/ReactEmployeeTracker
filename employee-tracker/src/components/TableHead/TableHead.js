import React, { Component } from "react";

class TableHead extends Component {

    render({children}) {
       
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
                
               {children}
            </table>
        );
    }
}

export default TableHead;