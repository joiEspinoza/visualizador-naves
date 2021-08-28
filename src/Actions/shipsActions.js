import { types } from '../Type/types';
import axios from 'axios';


//////<<<<<------------------------------------------------``


const startLoadShips = () =>
{   
    
  return async ( dispatch ) => 
  {

    try 
    {

      const request = await axios.get(`https://swapi.dev/api/starships`)

      if( request.status === 200 )
      {
        dispatch( loadShips(request.data.results) );
        return true;
      }
      else
      {
        dispatch( loadShips([]) );
        return false;
      };
  

    } 
    catch( error ) 
    { 
      console.log( "---->Error get ships" )
      return false;   
    };

  };

};


const loadPilots = ( pilotUrl ) =>
{   
  
  return async () => 
  {

    try 
    {

      const request = await axios.get( pilotUrl )

      if( request.status === 200 )
      {
        return request.data.name;
      }
      else
      {
        return "";
      };
  

    } 
    catch( error ) 
    { 
      console.log( "--->Error get pilots" )
      return "";   
    };

  };

};


const loadShips = ( ships ) => ( { type : types.loadShips, payload : ships } );

const setActiveShip = ( ship ) => ( { type : types.setActiveShip, payload : ship } );


//////---------------------------------------------->>>>>


export { startLoadShips, setActiveShip, loadPilots }