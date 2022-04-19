import { useState } from 'react';
import WhatIs2Plus2 from './WhatIs2Plus2';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	
	const [speciesName,setSpeciesName]= useState<string>('humans');
	const [planetName,setPlanetName]=useState<string>('Earth');
	const [numberOfBeings,setNumberOfBeings]=useState<string>('');
	const [whatIs2Plus2,setWhatis2Plus2]=useState<string>('');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{
				<>
					<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e:any)=> setSpeciesName(e.target.value)}/>
					<PlanetName planetName={planetName} onChangePlanetName={(e:any)=>setPlanetName(e.target.value)}/>
					<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e:any)=>setNumberOfBeings(e.target.value)}/>
					<WhatIs2Plus2 whatIs2Plus2={whatIs2Plus2} onchangeWhatis2Plus2={(e:any)=>setWhatis2Plus2(e.target.value)}/>
				</>
			}
		</section>
	);
};

export default W12MForm;
