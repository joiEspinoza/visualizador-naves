import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../Reducers/rootReducer";
import { loadState, saveState } from "./saveLoadState";

//////<<<<<------------------------------------------------``


const initialDataState = loadState() || {};

const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const store = createStore(

    rootReducer,
    initialDataState,
    composeEnhancers( applyMiddleware( thunk ) )

);

store.subscribe( ()=> saveState( store.getState() ) );


//////---------------------------------------------->>>>>

export { store };