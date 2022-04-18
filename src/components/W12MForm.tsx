import { useState } from 'react';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	
	const [speciesName,setSpeciesName]= useState<string>('humans');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e:any)=> setSpeciesName(e.target.value)}/>}
		</section>
	);
};

export default W12MForm;
