import React, { Component } from "react";

class TableBody extends Component {
    render({id, name, email, cell, city, state}) {
        return (
            <>
                <tr key={cell}>
                    <th scope="row" >{id}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{cell}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                </tr>
            </>
        )
    }
}

export default TableBody;