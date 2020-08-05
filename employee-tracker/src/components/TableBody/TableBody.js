import React from "react";

function TableBody({ cell, picture, name, email, location }) {

    return (

        <tr key={cell}>
             <td scope="row" >
                <img src={picture.thumbnail} alt="employee pic" />
            </td> 
            <td>{name.first} { name.last }</td>
            <td>{email}</td>
            <td>{cell}</td>
            <td>{location.city}</td>
            <td>{location.state}</td> 
        </tr>

    )
}

export default TableBody;