import { useState } from "react";

//////<<<<<------------------------------------------------``

const useForm = ( initialValues = {} ) =>
{

    const [ formValues, setformValues ] = useState( initialValues );

    const handleInputChange = ( { target } ) =>
    {
        setformValues( { ...formValues, [ target.name ] : target.value } );
    };

    const reset = () => setformValues( initialValues );

    return [ formValues, handleInputChange, reset ];

};

//////---------------------------------------------->>>>>

export { useForm };