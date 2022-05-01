import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface NumberOfBeingsProps {
    numberOfBeings: string;
    onChangeNumberOfBeings: (e:React.ChangeEvent<HTMLInputElement>)=>void;
};


export const NumberOfBeingsErrorMessage = "Numbers ONLY. Must be at least 1,000,000,000.";

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({numberOfBeings,onChangeNumberOfBeings}) => {
        
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

    const validate : (value : string) => string | undefined = (value) => {
        if(Number.isNaN(Number(value)) === true || Number(value) < 1000000000 ){
            return NumberOfBeingsErrorMessage;
        }
        return undefined;
    }
    
    return (
    <>
        <label htmlFor='numberOfBeings'>Number of beings: </label>
        <input id='numberOfBeings' 
            type='text' 
            value={numberOfBeings} 
            onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeNumberOfBeings(e);
				    }
                }/>
        <ErrorMessage errorMessage={errorMessage}/>
    </>
    );
};
export default NumberOfBeings;