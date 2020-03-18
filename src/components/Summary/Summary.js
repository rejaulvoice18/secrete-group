import React from 'react';
import './Summary.css';

const Summary = (props) => {
    const summary = props.summary;
    //const total = summary.reduce((total, prd) => total + prd.salary, 0);
    let total = 0;
    for(let i = 0; i < summary.length; i++){
        const sum = summary[i];
        total = total + sum.salary;
    }
    const ftotal = (total).toFixed(2)
    return (
        <div>
            <h4 className="sumary-design">SICB Summary</h4>
            
            <p className="salary-show"> Sallary: ${ftotal}</p>
            <button className="select-person-btn">Preview</button>
        </div>
    );
};

export default Summary;