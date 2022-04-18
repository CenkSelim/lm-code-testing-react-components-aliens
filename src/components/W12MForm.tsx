import { useState } from 'react';
import PlanetName from './PlanetName';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	
	const [speciesName,setSpeciesName]= useState<string>('humans');
	const [planetName,setPlanetName]=useState<string>('Earth');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{
				<>
				<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e:any)=> setSpeciesName(e.target.value)}/>
				<PlanetName planetName={planetName} onChangePlanetName={(e:any)=>setPlanetName(e.target.value)}/>
				</>
			}
		</section>
	);
};

export default W12MForm;
