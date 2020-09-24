import React  from "react";
import TableBody from '../TableBody/TableBody';

function TableHead({results, sortUsers}) {
   
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col" onClick={() => sortUsers()}>name</th>
                    <th scope="col">email</th>
                    <th scope="col">cell</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                </tr>
            </thead>
            <tbody>
            {
                results.map(({cell, name, picture, location, email}) => {
                    return <TableBody
                                cell={cell}
                                name={name}
                                location={location}
                                picture={picture}
                                email={email}
                                />
                })
            }   
            </tbody>
        </table>
    )
}

export default TableHead;