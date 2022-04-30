export interface ErrorMessageProps {
    errorMessage:string;
};

const arrorMessageStyle: React.CSSProperties = {
    color: 'red',
    fontWeight: 'bold',
    fontStyle:'italic'
}

const ErrorMessage:React.FC<ErrorMessageProps> = ({errorMessage}) => {

    return(
        <p style={arrorMessageStyle}>{errorMessage}</p>
    );

};

export default ErrorMessage;