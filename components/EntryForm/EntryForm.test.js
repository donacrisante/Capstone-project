import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EntryForm from "./EntryForm";
import Form from "./EntryForm";
import "@testing-library/jest-dom/extend-expect";

test("should update the date value when the user enters a valid date", () => {
  const { container } = render(<EntryForm />);
  const dateInput = container.querySelector("input#date");
  fireEvent.change(dateInput, { target: { value: "2023-09-07" } });
  expect(dateInput).toHaveValue("2023-09-07");
});

test("form gets displayed with all input fields", () => {
  render(<Form />);
  const startInput = screen.getByRole("textbox", { name: /from/i });
  const destinationInput = screen.getByRole("textbox", { name: /to/i });
  const kmInput = screen.getByRole("textbox", { name: /km/i });
  const transportInput = screen.getByRole("combobox", { name: /transport/i });
  expect(startInput).toBeInTheDocument();
  expect(destinationInput).toBeInTheDocument();
  expect(kmInput).toBeInTheDocument();
  expect(transportInput).toBeInTheDocument();
});

test("select-element returns the desired value", async () => {
  const user = userEvent.setup();
  render(<Form />);
  await user.selectOptions(
    screen.getByRole("combobox", { name: /transport/i }),
    ["train"]
  );
  expect(
    screen.getByRole("combobox", { name: /transport/i })
  ).toHaveDisplayValue("Train");
});

test("submit data and render them in a entry list", async () => {
  const user = userEvent.setup();
  render(<Form />);
  const button = screen.getByRole("button", { name: /add journey/i });
  expect(button).toBeInTheDocument();
  await user.click(button);
});
