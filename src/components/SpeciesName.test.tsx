import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesName, {SpeciesNameProps} from "./SpeciesName";

describe('SpeciesName component', () => {
	it(`Given the required props,
		When the component is rendered,
		Then the appropriate data should be present`, () => {
		const requiredProps: SpeciesNameProps = {
      speciesName: "human",
			onChangeSpeciesName: () => {},
		};
		render(<SpeciesName {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.speciesName)).toBeInTheDocument();
	});

	it(`Given the component is rendered,
			When an entry is made,
			Then the appropriate function should be called`, () => {
		const mockEntryHandler = jest.fn((e:React.ChangeEvent<HTMLInputElement>)=>{
			return e.target.value;
		});
		
		const requiredProps: SpeciesNameProps = {
			speciesName: "",
			onChangeSpeciesName: mockEntryHandler,
		};
		
		render(<SpeciesName {...requiredProps} />);

		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing 'Human'
		userEvent.type(textbox, 'Human'); 
		expect(mockEntryHandler.mock.calls.length).toBe(5);
		expect(mockEntryHandler.mock.results[0].value).toBe('H');
		expect(mockEntryHandler.mock.results[1].value).toBe('u');
		expect(mockEntryHandler.mock.results[2].value).toBe('m');
		expect(mockEntryHandler.mock.results[3].value).toBe('a');
		expect(mockEntryHandler.mock.results[4].value).toBe('n');
	});
});
