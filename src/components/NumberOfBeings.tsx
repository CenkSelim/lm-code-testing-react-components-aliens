export interface NumberOfBeingsProps {
    numberOfBeings: string;
    onChangeNumberOfBeings: (e:React.ChangeEvent<HTMLInputElement>)=>void;
};

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({numberOfBeings,onChangeNumberOfBeings}) => (
    <p>
        <label htmlFor='numberOfBeings'>Number of beings: </label>
        <input id='numberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings}/>
    </p>
);

export default NumberOfBeings;