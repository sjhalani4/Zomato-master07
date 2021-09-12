import React from 'react';
import { useLocation } from 'react-router';


const Temp = () => {
    return (
        <div>
          Hello This is a temp {useLocation().pathname}.  
        </div>
    );
};

export default Temp;
