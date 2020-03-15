import React from 'react';
import './Employee.css'

const Employee = (props) => {
    const { url, email, name } = props.emp;
    return (
        <div className="sing-employ">
            <div className="sing-img">
                <img src={url} alt=""/>
                <h3 class="Name">{email}</h3>                
            </div>
            <div className="employ-name">
                <h3 class="Name">{name}</h3>
                
            </div>
            
        </div>
    );
};

export default Employee;