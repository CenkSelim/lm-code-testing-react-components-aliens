import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanetName, {PlanetNameErrorMessage, PlanetNameProps} from "./PlanetName";

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

describe('PlanetName component entry validattion', () => {	

	it(`Given the required props,
		When the component is rendered the entry with lesss than 2 characters
		Then the appropriate error message should be present`, async () => {
		const requiredProps: PlanetNameProps = {
      		planetName: "",
			onChangePlanetName: () => {},
		};
		render(<PlanetName {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, 'E'); 
    	expect(await screen.findByText(PlanetNameErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with more than 49 characters
		Then the appropriate error message should be present`, async () => {
		const requiredProps: PlanetNameProps = {
      		planetName: "This the planet Earth third rock from the sun Ok!!!!!",
			onChangePlanetName: () => {},
		};
		render(<PlanetName {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, 'This the planet Earth third rock from the sun Ok!!!!!'); 	
    	expect(await screen.findByText(PlanetNameErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with special characters
		Then the appropriate error message should be present`, async () => {
		const requiredProps: PlanetNameProps = {
      		planetName: "Mars$$%%",
			onChangePlanetName: () => {},
		};
		render(<PlanetName {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, 'Mars$$%%'); 	
    	expect(await screen.findByText(PlanetNameErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with valid data no message will be 
		Then the appropriate data should be present`, async () => {
		const requiredProps: PlanetNameProps = {
      		planetName: "Earth",
			onChangePlanetName: () => {},
		};

		render(<PlanetName {...requiredProps} />);
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, 'Earth'); 	
    	expect(screen.queryByText(PlanetNameErrorMessage)).not.toBeInTheDocument();
	});
});
