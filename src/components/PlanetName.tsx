interface PlanetNameProps {
    planetName:string;
    onChangePlanetName: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const PlanetName : React.FC<PlanetNameProps> = ({planetName,onChangePlanetName}) => (
<>
    <label htmlFor='planetName' >Planet Name: </label>
    <input id='planetName' type='text' value={planetName} onChange={onChangePlanetName}/>   
</>
);

export default PlanetName;