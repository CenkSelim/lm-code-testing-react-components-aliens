import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WhatIs2Plus2, {WhatIs2Plus2ErrorMessage, WhatIs2Plus2Props} from "./WhatIs2Plus2"

describe('WhatIs2Plus2 component', () => {
	it(`Given the required props,
		When the component is rendered,
		Then the appropriate data should be present`, () => {
		const requiredProps: WhatIs2Plus2Props = {
            whatIs2Plus2 : 'Not 4',
            onChangeWhatis2Plus2 : () => {},
		};
		render(<WhatIs2Plus2 {...requiredProps} />);
		userEvent.selectOptions(screen.getByLabelText('What is 2 + 2 :'), 'Not 4');
		expect(screen.getByDisplayValue(requiredProps.whatIs2Plus2)).toBeInTheDocument();
	});

    it(`Given the component is rendered,
			When an entry is made,
			Then the appropriate function should be called`, () => {
		const mockEntryHandler = jest.fn((e:React.ChangeEvent<HTMLSelectElement>)=>{
			return e.target.value;
		});
		
		const requiredProps: WhatIs2Plus2Props = {
            whatIs2Plus2 : 'Not 4',
            onChangeWhatis2Plus2 : mockEntryHandler,
		};
		
		render(<WhatIs2Plus2 {...requiredProps} />);

        userEvent.selectOptions(screen.getByLabelText('What is 2 + 2 :'), '4');
		expect(mockEntryHandler.mock.calls.length).toBe(1);
		expect(mockEntryHandler.mock.results[0].value).toBe('4');
	});
});

describe('SpeciesName component entry validattion', () => {	

	it(`Given the required props,
		When the component is rendered the entry with lesss than 3 characters
		Then the appropriate error message should be present`, async () => {
		const requiredProps: WhatIs2Plus2Props = {
            whatIs2Plus2 : 'Not 4',
            onChangeWhatis2Plus2 : () => {},
		};
		
		render(<WhatIs2Plus2 {...requiredProps} />);

        userEvent.selectOptions(screen.getByLabelText('What is 2 + 2 :'), 'Not 4');
    	expect(await screen.findByText(WhatIs2Plus2ErrorMessage)).toBeInTheDocument();
	});


	it(`Given the required props,
		When the component is rendered the entry with valid data  
		Then no message should be present`, async () => {
		
		const requiredProps: WhatIs2Plus2Props = {
            whatIs2Plus2 : 'Not 4',
            onChangeWhatis2Plus2 : () => {},
		};
		
		render(<WhatIs2Plus2 {...requiredProps} />);

        userEvent.selectOptions(screen.getByLabelText('What is 2 + 2 :'), '4');
    	expect(screen.queryByText(WhatIs2Plus2ErrorMessage)).not.toBeInTheDocument();
	});
});
