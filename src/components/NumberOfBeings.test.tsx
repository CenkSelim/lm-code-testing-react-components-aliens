import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfBeings, {NumberOfBeingsErrorMessage, NumberOfBeingsProps} from "./NumberOfBeings";

describe('NumberOfBeings component', () => {
	it(`Given the required props,
		When the component is rendered,
		Then the appropriate data should be present`, () => {
		const requiredProps: NumberOfBeingsProps = {
      		numberOfBeings: "",
			onChangeNumberOfBeings: () => {},
		};
		render(<NumberOfBeings {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.numberOfBeings)).toBeInTheDocument();
	});

	it(`Given the component is rendered,
			When an entry is made,
			Then the appropriate function should be called`, () => {
		const mockEntryHandler = jest.fn((e:React.ChangeEvent<HTMLInputElement>)=>{
			return e.target.value;
		});
		
		const requiredProps: NumberOfBeingsProps = {
			numberOfBeings: "",
			onChangeNumberOfBeings: mockEntryHandler,
		};
		
		render(<NumberOfBeings {...requiredProps} />);

		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing '17'
		userEvent.type(textbox, '17'); 
		expect(mockEntryHandler.mock.calls.length).toBe(2);
		expect(mockEntryHandler.mock.results[0].value).toBe('1');
		expect(mockEntryHandler.mock.results[1].value).toBe('7');
	});
});


describe('NumberOfBeings component entry validattion', () => {	

	it(`Given the required props,
		When the component is rendered the entry with a non number characters
		Then the appropriate error message should be present`, async () => {
		const requiredProps: NumberOfBeingsProps = {
      		numberOfBeings: "1A",
			onChangeNumberOfBeings: () => {},
		};
		render(<NumberOfBeings {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, '1A'); 	
    	expect(await screen.findByText(NumberOfBeingsErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with a number less than 1,000,000,000
		Then the appropriate error message should be present`, async () => {
		const requiredProps: NumberOfBeingsProps = {
      		numberOfBeings: "1",
			onChangeNumberOfBeings: () => {},
		};
		render(<NumberOfBeings {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, '1'); 	
    	expect(await screen.findByText(NumberOfBeingsErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with another number less than 1,000,000,000
		Then the appropriate error message should be present`, async () => {
		const requiredProps: NumberOfBeingsProps = {
      		numberOfBeings: "99999999",
			onChangeNumberOfBeings: () => {},
		};
		render(<NumberOfBeings {...requiredProps} />);	
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, '9'); 	
    	expect(await screen.findByText(NumberOfBeingsErrorMessage)).toBeInTheDocument();
	});

	it(`Given the required props,
		When the component is rendered the entry with valid data 
		Then no message should be present`, async () => {
		const requiredProps: NumberOfBeingsProps = {
      		numberOfBeings: "1000000000",
			onChangeNumberOfBeings: () => {},
		};

		render(<NumberOfBeings {...requiredProps} />);
		// Extract the textbox component
		const textbox = screen.getByRole('textbox');
		// Simulate typing to fire event
		userEvent.type(textbox, '1'); 	
    	expect(screen.queryByText(NumberOfBeingsErrorMessage)).not.toBeInTheDocument();
	});
});