import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReasonForSparing, {ReasonForSparingErrorMessage, ReasonForSparingProps} from "./ReasonForSparing";

describe('ReasonForSparing component', () => {
	it(`Given the required props,
		When the component is rendered,
		Then the appropriate data should be present`, () => {
		const requiredProps: ReasonForSparingProps = {
      		reasonForSparing: "",
			onChangeReasonForSparing: () => {},
		};
		render(<ReasonForSparing {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.reasonForSparing)).toBeInTheDocument();
	});

	it(`Given the component is rendered,
			When an entry is made,
			Then the appropriate function should be called`, () => {
		const mockEntryHandler = jest.fn((e:React.ChangeEvent<HTMLTextAreaElement>)=>{
			return e.target.value;
		});
		
		const requiredProps: ReasonForSparingProps = {
      		reasonForSparing: "",
			onChangeReasonForSparing: mockEntryHandler
		};
		
		render(<ReasonForSparing {...requiredProps} />);

		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing 'I am ...'
		userEvent.type(textbox, 'I am ...'); 
		expect(mockEntryHandler.mock.calls.length).toBe(8);
		expect(mockEntryHandler.mock.results[0].value).toBe('I');
		expect(mockEntryHandler.mock.results[1].value).toBe(' ');
		expect(mockEntryHandler.mock.results[2].value).toBe('a');
		expect(mockEntryHandler.mock.results[3].value).toBe('m');
		expect(mockEntryHandler.mock.results[4].value).toBe(' ');
        expect(mockEntryHandler.mock.results[5].value).toBe('.');
        expect(mockEntryHandler.mock.results[6].value).toBe('.');
        expect(mockEntryHandler.mock.results[7].value).toBe('.');
	});
});


describe('SpeciesName component entry validattion', () => {	

	it(`Given the required props,
		When the component is rendered the entry with lesss than 17 characters
		Then the appropriate error message should be present`, async () => {
		const requiredProps: ReasonForSparingProps = {
      		reasonForSparing: "",
			onChangeReasonForSparing: () => {},
		};
		render(<ReasonForSparing {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, 'H'); 	
    	expect(await screen.findByText(ReasonForSparingErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with more than 153 characters
		Then the appropriate error message should be present`, async () => {
		const requiredProps: ReasonForSparingProps = {
      		reasonForSparing: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
			onChangeReasonForSparing: () => {},
		};
		render(<ReasonForSparing {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, '!'); 	
    	expect(await screen.findByText(ReasonForSparingErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with valid data  
		Then no message should be present`, async () => {
		const requiredProps: ReasonForSparingProps = {
      		reasonForSparing: "There has to be a better way than this.",
			onChangeReasonForSparing: () => {},
		};
		render(<ReasonForSparing {...requiredProps} />);
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, 'matey'); 	
    	expect(screen.queryByText(ReasonForSparingErrorMessage)).not.toBeInTheDocument();
	});
});
