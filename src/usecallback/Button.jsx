import React from 'react';
const Button = ({handleClick, children}) => {
    return ( 
        <div className="mb-4">
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
     );
}
 
export default React.memo(Button);