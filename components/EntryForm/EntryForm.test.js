import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

test("form gets displayed with all input fields", () => {
  render(<Form />);
  const dateInput = screen.getByRole("input", { name: /date/i });
  const startInput = screen.getByRole("input", { name: /from/i });
  const destinationInput = screen.getByRole("input", { name: /to/i });
  const kmInput = screen.getByRole("input", { name: /km/i });
  const transportInput = screen.getByRole("input", { name: /transport/i });
  expect(dateInput).toBeInTheDocument();
  expect(startInput).toBeInTheDocument();
  expect(destinationInput).toBeInTheDocument();
  expect(kmInput).toBeInTheDocument();
  expect(transportInput).toBeInTheDocument();
});

test("select-element returns the desired value", async () => {
  const user = userEvent.setup();
  render(<Form />);
  await user.selectOptions(
    screen.getByRole("dropdown", { name: /transport/i }),
    ["train"]
  );
  expect(
    screen.getByRole("dropdown", { name: /transport/i })
  ).toHaveDisplayValue("train");
});

test("submit data and render them in a entry list", async () => {
  const user = userEvent.setup();
  render(<Form />);
  const button = screen.getByRole("button", { name: /add journey/i });
  expect(button).toBeInTheDocument();
  await user.click(button);
});
