import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfBeings, {NumberOfBeingsProps} from "./NumberOfBeings";

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
