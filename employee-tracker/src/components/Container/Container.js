import React from 'react';
import Input from '../Input/input';
import EmployeeList from '../List/List'

function Container () {
    return (
        <div className = "container d-flex justify-content-center">
            <Input />
            <EmployeeList />
        </div>
    )
}

export default Container;