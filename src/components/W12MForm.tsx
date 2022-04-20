import { useState } from 'react';
import WhatIs2Plus2 from './WhatIs2Plus2';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {
	
	const [speciesName,setSpeciesName]= useState<string>('humans');
	const [planetName,setPlanetName]=useState<string>('Earth');
	const [numberOfBeings,setNumberOfBeings]=useState<string>('');
	const [whatIs2Plus2,setWhatis2Plus2]=useState<string>('Not 4');
	const [reasonForSparing,setReasonForSparing]=useState<string>('');
	const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
		console.log(`speciesName: ${speciesName}, planetName: ${planetName}, 
		numberOfBeings: ${numberOfBeings}, whatIs2Plus2: ${whatIs2Plus2}, 
		reasonForSparing: ${reasonForSparing}`);
  	};
	

	return (		
			<section className='w12MForm'>
				<W12MHeader />
				{
					<>
						<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e:any)=> setSpeciesName(e.target.value)}/>
						<PlanetName planetName={planetName} onChangePlanetName={(e:any)=>setPlanetName(e.target.value)}/>
						<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e:any)=>setNumberOfBeings(e.target.value)}/>
						<WhatIs2Plus2 whatIs2Plus2={whatIs2Plus2} onChangeWhatis2Plus2={(e:any)=>setWhatis2Plus2(e.target.value)}/>
						<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(e:any)=>setReasonForSparing(e.target.value)}/>
						<p><button type = 'submit' onClick={handleSubmit}>Form submit</button></p>
					</>
				}
			</section>
	);
};

export default W12MForm;
