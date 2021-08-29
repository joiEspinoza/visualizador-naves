import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// func Backend | Redux
import { startLoadShips, setActiveShip, loadPilots  } from '../Actions/shipsActions';

//custome hook
import { useForm } from '../Hook/useForm';

//Formato números
import { numberFormat } from '../Helpers/numberFormat';


//////<<<<<------------------------------------------------``


const Main = () => 
{

    //Hooks
    const dispatch = useDispatch();
    const { ships, activeShip } = useSelector( state => state.hangar );
    const [pilots, setPilots] = useState([])
    const [load, setLoad] = useState(false)
    
    
    //Extracción Info
    let activeInfo = ships.filter( ( ship ) => ship.name === activeShip );
    let pilotsUrl = activeInfo.map( ( info )=> info.pilots );
   
  
    //Carga Info
    useEffect(() => 
    {   
    
        //Carga Naves
        dispatch(startLoadShips());

        //Carga pilotos
        startLoadPilots();

        
    },[activeShip])


    ///Inicia carga pilotos
    const startLoadPilots = () =>
    {
       
        onLoad();

        //Validación info urls 
       if( pilotsUrl[0] )
       {
       
        pilotsUrl[0].length <= 0 && offLoad();

        pilotsUrl[0].map( ( url ) => 
        {   
            ///Carga pilotos || Info demora un par de seg en cargar
            dispatch( loadPilots( url ) )
            .then( ( result ) => 
            {
                pilots.push(result)
                setPilots(pilots)
                offLoad();

            });
        
        });
       
       };

    };


    //Custome Hook | Rescata info desde input
    const initFormValue = { shipName : "" };
    const [ formValues, handleInputChange ] = useForm( initFormValue );
    const { shipName } = formValues;
    
    
    //Cambia información activa || Limpia informacion pilotos
    const handleInfo = () =>
    {
        dispatch( setActiveShip( shipName ) );   
        setPilots([]);
    };


    //Manejador animación carga
    const offLoad = () => setLoad(false);
    const onLoad = () => setLoad(true);


    
/************************************************************************************************* */


    return (
       
        <div className="container">
            
            <div className="row">
                
                <div className="col-md-12 col-12 base__flexCenter mt-3">

                    <select className="main__select" name="shipName" value={ shipName } onClick={ handleInfo } onChange={ handleInputChange }>
                        
                        <option value={""}>Seleccione una nave...</option>
                        {
                            
                            ships.map( ( ship, index ) => 
                            {

                                return <option key={ index } value={ ship.name }>{ ship.name }</option>
                        
                            })
                        }
                        
                    </select>

                </div>
            
            </div>

            {
               activeShip !== "" &&
               <>
                
                <div className="row">
                    
                    <div className="col-md-12 col-12 base__flexCenter mt-3">
                        
                        <div className="main__features_passengers text-center">
                            
                            {
                                activeInfo.map( ( info, index ) => 
                                {
                                    return<div key={index}>
                                    <h1><b>{info.name}</b></h1>
                                    <p>{info.model}</p>
                                    
                                    <hr/>
                                    
                                    <h1><b>Fabricante</b></h1>
                                    <p>{info.manufacturer}</p>
                                    
                                    <h1><b>Largo</b></h1>
                                    <p>{ info.length+" fts." }</p>
                                    
                                    <h1><b>Valor</b></h1>
                                    <p>
                                    
                                    {
                                        numberFormat(info.cost_in_credits) == 0

                                        ?
                                        
                                        info.cost_in_credits.toUpperCase()

                                        :

                                        numberFormat(info.cost_in_credits)+" créditos"

                                    }

        
                                    </p>
                                    
                                    <h1><b>Cantidad pasajeros</b></h1>
                                    <p>
                                        
                                        {
                                            numberFormat(info.passengers) == 0
        
                                            ?
                                            
                                            info.passengers.toUpperCase()
        
                                            :
        
                                            numberFormat(info.passengers)
        
                                        }
                                        
                                    </p>
                                            
                                    </div>
                                })
                            }
                            
                        
                        </div>

                    </div>
                
                </div>
                
                <div className="row base__pNoMarg">

                    <div className="col-md-12 col-12 base__flexCenter mt-3">

                        <div className="main__features_passengers text-center">
                            
                            <h1><b>Pasajeros</b></h1>
                            
                            <hr/>

                      
                            {   
                            
                                pilots.length > 0 ?
                                pilots.sort().map( ( pilot, index ) => 
                                {
                                    return <p key={index}>{pilot}</p>
                                })  
                                :
                                load ?
                                <img className="main__load" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1630257200/testSOAINT/Dual_Ring-1s-200px_mablo4.svg" alt="load"/>
                                : 
                                "N/A"
  
                            }
                        
                        </div>

                    </div>

                </div>
               
               </>
            }
            
        </div> 
           
    )
}


//////---------------------------------------------->>>>>


export default Main;
