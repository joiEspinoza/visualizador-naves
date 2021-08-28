import { combineReducers } from "redux";
import { shipsReducer } from "./shipsReducer";



//////<<<<<------------------------------------------------``


const rootReducer = combineReducers(


    {
        hangar : shipsReducer
    }

);


//////---------------------------------------------->>>>>


export { rootReducer };