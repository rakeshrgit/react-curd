import React, { useState, useMemo } from 'react';
const UseMemoFunction = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const countFunOne = () =>{
        setCounterOne(counterOne + 1)
        //console.log('render one')
    }
    const countFunTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo (
        () => {
            let i = 0
            while(i < 2000000000) i++
            return counterOne % 2 === 0
        },[]
    )

    return ( 
        <div className="container">
            <div className="mb-3">
                <button className="btn btn-primary" onClick={countFunOne}>Counter One</button> 
                <span className="d-inline-block mx-2">{counterOne}</span>
                <span>{isEven ? 'Even' : 'Odd' }</span>
            </div>       
            <div className="mb-3">
                <button className="btn btn-secondary" onClick={countFunTwo}>Counter Two</button> 
                <span className="d-inline-block mx-2">{counterTwo}</span>
            </div> 



        </div>
     );
}
 
export default UseMemoFunction;
