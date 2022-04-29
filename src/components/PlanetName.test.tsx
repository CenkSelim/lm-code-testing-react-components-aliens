import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanetName, {PlanetNameProps} from "./PlanetName";

describe('PlanetName component', () => {
	it(`Given the required props,
		When the component is rendered,
		Then the appropriate data should be present`, () => {
		const requiredProps: PlanetNameProps = {
      		planetName: "Earth",
			onChangePlanetName: () => {},
		};
		render(<PlanetName {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.planetName)).toBeInTheDocument();
	});

	it(`Given the component is rendered,
			When an entry is made,
			Then the appropriate function should be called`, () => {
		const mockEntryHandler = jest.fn((e:React.ChangeEvent<HTMLInputElement>)=>{
			return e.target.value;
		});
		
		const requiredProps: PlanetNameProps = {
      		planetName: "",
			onChangePlanetName: mockEntryHandler
		};
		
		render(<PlanetName {...requiredProps} />);

		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing 'Earth'
		userEvent.type(textbox, 'Earth'); 
		expect(mockEntryHandler.mock.calls.length).toBe(5);
		expect(mockEntryHandler.mock.results[0].value).toBe('E');
		expect(mockEntryHandler.mock.results[1].value).toBe('a');
		expect(mockEntryHandler.mock.results[2].value).toBe('r');
		expect(mockEntryHandler.mock.results[3].value).toBe('t');
		expect(mockEntryHandler.mock.results[4].value).toBe('h');
	});
});
