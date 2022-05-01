import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface ReasonForSparingProps {
    reasonForSparing: string;
    onChangeReasonForSparing: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
}

export const ReasonForSparingErrorMessage = "Must be between 17 and 153 characters.";


const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing,onChangeReasonForSparing}) => {
 
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

    const validate : (value : string) => string | undefined = (value) => {
        if(value.length < 17 || value.length > 153 ) {
            return ReasonForSparingErrorMessage;
        }
        return undefined;
    }

    return (
    <>
        <label htmlFor='reasonForSparing'>Reason for sparing : 
        <textarea id='reasonForSparing' 
            value={reasonForSparing} 
            onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeReasonForSparing(e);
				    }
                }/>
        </label>
        <ErrorMessage errorMessage={errorMessage}/>
    </>
    );
};
export default ReasonForSparing;