import { types } from "../Type/types";


//////<<<<<------------------------------------------------``


//Manejador estado
const initState =
{
    ships : [],
    activeShip : "",
};


const shipsReducer = ( state = initState, action ) =>
{

    switch ( action.type ) 
    {
    
        case types.loadShips : return { ...state, ships : action.payload };

        case types.setActiveShip : return { ...state, activeShip : action.payload };

        default: return state;
            
    };

};

//////---------------------------------------------->>>>>


export { shipsReducer };