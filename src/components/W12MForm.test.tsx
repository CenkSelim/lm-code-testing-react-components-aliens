import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm from './W12MForm';

it('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});

it(`Given a form is rendered,
	When the 'Form submit' button is clicked,
	Then the handleSubmit function is called`, () => {

	const logSpy = jest.spyOn(console, 'log');

	render(<W12MForm />);
  
	const submitFormButton = screen
		.getAllByRole('button')
		.find((button) => button.textContent === 'Form submit');

	expect(submitFormButton).toBeInTheDocument();

	if (submitFormButton) {
		userEvent.click(submitFormButton);
	}

	expect(logSpy).toHaveBeenCalledTimes(1);
	expect(logSpy).toBeCalledWith('speciesName: humans, planetName: Earth, \n\t\tnumberOfBeings: , whatIs2Plus2: Not 4, \n\t\treasonForSparing: ');
});
