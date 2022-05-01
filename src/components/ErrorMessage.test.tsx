import { render, screen } from "@testing-library/react";
import ErrorMessage, { ErrorMessageProps } from "./ErrorMessage";


describe('ErrorMessage Component', () => {
    it(`Given the required props,
        When the component is rendered,
        Then the appropriate data should be present`, () => {
        
        const requiredProps:ErrorMessageProps = {
            errorMessage: "There has been an error"
        };

        render (<ErrorMessage {...requiredProps}/>);
        expect(screen.getByText(requiredProps.errorMessage as string)).toBeInTheDocument();
        
    });   
});