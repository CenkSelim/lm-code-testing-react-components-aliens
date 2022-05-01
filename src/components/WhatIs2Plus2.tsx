import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface WhatIs2Plus2Props {
    whatIs2Plus2 : string;
    onChangeWhatis2Plus2 : (e:React.ChangeEvent<HTMLSelectElement>)=>void;
}

export const WhatIs2Plus2ErrorMessage = "You must be kidding!";

const WhatIs2Plus2:React.FC<WhatIs2Plus2Props> = ({whatIs2Plus2,onChangeWhatis2Plus2}) => {
   
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

		const validate : (value : string) => string | undefined = (value) => {
        if(value.length < 1 || Number.isNaN(Number(value)) === true){
            return WhatIs2Plus2ErrorMessage;
        }
        return undefined;
    }
  
    return (
        <>
            <label htmlFor='whatIs2Plus2'>What is 2 + 2 : </label>
            <select id='whatIs2Plus2' value={whatIs2Plus2} 
                onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeWhatis2Plus2(e);
				    }
                }>
                <option value="Not 4">Not 4</option>
                <option value="4">4</option>
            </select>
            <ErrorMessage errorMessage={errorMessage}/>
        </>
    );
};

export default WhatIs2Plus2;