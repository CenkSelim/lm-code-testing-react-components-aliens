import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface PlanetNameProps {
    planetName:string;
    onChangePlanetName: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}


const PlanetName : React.FC<PlanetNameProps> = ({planetName,onChangePlanetName}) => {
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

    const validate : (value : string) => string | undefined = (value) => {
        if(value.length < 2 || value.length >49 || 
            value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){           
                return "Must be between 2 and 49 characters. Numbers are allowed, but no special characters.";       
        }

        return undefined;
	}

    return (
        <p>
            <label htmlFor='planetName' >Planet Name: </label>
            <input id='planetName' 
            type='text' value={planetName} 
            onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangePlanetName(e);
				    }
            }/>
            <ErrorMessage errorMessage={errorMessage}/>   
        </p>
        );
   };

export default PlanetName;