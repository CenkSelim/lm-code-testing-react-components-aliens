interface ReasonForSparingProps {
    reasonForSparing: string;
    onChangeReasonForSparing: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing,onChangeReasonForSparing}) => (
    <>
        <label htmlFor='reasonForSparing'>Reason for sparing : 
        <textarea id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing}/></label>
    </>
);

export default ReasonForSparing;