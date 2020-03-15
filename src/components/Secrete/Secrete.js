import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Secrete.css'
import Employee from '../Employee/Employee';

const Secrete = () => {
    
    const [employee, setEmployees] = useState([]);
    //https://randomuser.me/api/?results=50&nat=us,dk,fr,gb
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
        .then(res => {
            console.log(res)
            setEmployees(res.results)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
     
    return (
        <div className="secrete-group-container">
            <div className="details-container">
                    {
                    employee.map(single => <Employee employee={single}></Employee>)
                    }
            </div>
            <div className="overview-container-cart">
                <h4>Special publics details will be here</h4>
            </div>
        </div>
    );
};

export default Secrete;