import React, { useState, useEffect} from 'react';
//import axios from 'axios';
import './Secrete.css'
import Employee from '../Employee/Employee';
import Summary from '../Summary/Summary';

const Secrete = () => {
    const [employee, setEmployees] = useState([]);
    const [summary, setSummary] = useState([]);
    const handleAddPerson = (employee) => {
        console.log(employee)
        const newSummary = [...summary, employee];
        setSummary(newSummary);
    }
    
        useEffect(() => {
            fetch('http://www.json-generator.com/api/json/get/bUaTfsZtBu?indent=2')
            .then(res => res.json())
                .then(data => setEmployees(data.employees))


        //     axios.get('http://www.json-generator.com/api/json/get/bUaTfsZtBu?indent=2')
        // .then(res => {
        //     console.log(res)
        //     setEmployees(res.data.employees)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    },[])
     
    return (
        <div className="secrete-group-container">
            <div className="details-container">
                    {
                    employee.map(single => <Employee 
                        handleAddPerson={handleAddPerson}
                        employee={single}></Employee>)
                    }
            </div>
            <div className="overview-container-cart">
                 <Summary summary={summary}></Summary>
            </div>
        </div>
    );
};

export default Secrete;