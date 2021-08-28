import React from 'react'
import { Provider } from 'react-redux';
import Main from '../Components/Main';
import { store } from '../Store/store';


//////<<<<<------------------------------------------------``


const Spaceships = () => 
{
    
    return (
        
        <Provider store={ store }>
           <Main/>
        </Provider>
    )
}

//////---------------------------------------------->>>>>


export default Spaceships
