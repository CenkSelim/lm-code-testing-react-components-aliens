interface WhatIs2Plus2Props {
    whatIs2Plus2 : string;
    onChangeWhatis2Plus2 : (e:React.ChangeEvent<HTMLSelectElement>)=>void;
}

const WhatIs2Plus2:React.FC<WhatIs2Plus2Props> = ({whatIs2Plus2,onChangeWhatis2Plus2}) => (
    <p>
        <label htmlFor='whatIs2Plus2'>What is 2 + 2 : </label>
        <select id='whatIs2Plus2' value={whatIs2Plus2} onChange={onChangeWhatis2Plus2}>
            <option value="Not 4">Not 4</option>
            <option value="4">4</option>
        </select>
    </p>
);
export default WhatIs2Plus2;