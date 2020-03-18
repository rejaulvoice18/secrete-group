import React from 'react';
import './Employee.css'

const Employee = (props) => {
    const { name, pic, salary } = props.employee;
    return (
        <div className="sing-employ">
            <div className="sing-div">
                <img src={pic} alt=""/> 
            </div>
            <div className="employ-name">
                <h3 className="Name">{name}</h3>
                <p>Sallary : ${salary}</p>
                <button className="select-person-btn" onClick={() => props.handleAddPerson(props.employee)}>Select SICB Group</button>
            </div>
        </div>
    );
};

export default Employee;