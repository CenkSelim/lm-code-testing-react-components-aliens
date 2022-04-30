import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface SpeciesNameProps {
    speciesName:string;
    onChangeSpeciesName:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({speciesName,onChangeSpeciesName}) => {

        const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

		const validate : (value : string) => string | undefined = (value) => {
			if(value.length < 3 || value.length >23){
                return "Must be between 3 and 23 characters. No numbers or special characters allowed!";
            }
			return undefined;
		}
  
    return (

        <p>
            <label htmlFor='speciesName'>Species Name: </label>
            <input id='speciesName' 
                type='text' 
                value={speciesName} 
                onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeSpeciesName(e);
				    }
                }/>
            <ErrorMessage errorMessage={errorMessage}/>
        </p>
    );
};

export default SpeciesName;