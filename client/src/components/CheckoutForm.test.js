import React from "react";
import { render, getByLabelText, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />);
    getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {

    const {getByLabelText, findAllByText, getByTestId} = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/first name/i), {target: {value: 'hamza'}});
    fireEvent.change(getByLabelText(/last name/i), {target: {value: 'harmouche'}});
    fireEvent.change(getByLabelText(/address/i), {target: {value: 'florida'}});
    fireEvent.change(getByLabelText(/city/i), {target: {value: 'jax'}});
    fireEvent.change(getByLabelText(/state/i), {target: {value: 'fl'}});
    fireEvent.change(getByLabelText(/zip/i), {target: {value: '32548'}});

const checkoutButton = getByTestId('checkoutButton');
fireEvent.click(checkoutButton);

findAllByText(/hamza/i);

expect(getByTestId('successMessage')).toBeInTheDocument();

});
