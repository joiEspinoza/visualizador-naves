
const saveState = ( state ) =>
{
    if( !state )
    {
        return undefined;
    };

    const data = JSON.stringify( state );

    return localStorage.setItem( "SpaceShipsState", data );
};


const loadState = () =>
{
    const data =  JSON.parse( localStorage.getItem( "SpaceShipsState" ) );

    if( !data )
    {
        return undefined;
    };

    return data;
};

//////---------------------------------------------->>>>>

export { saveState, loadState };
