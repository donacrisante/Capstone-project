import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EntryList from "./EntryList";
import { useRouter } from "next/router";

jest.mock("next/router");


const entry = {
  date: "2023-01-10",
  destination: "Geneva",
  fuel: "",
  id: "1b24b87660d",
  km: "600",
  result: 19.2,
  start: "Heidelberg",
  transport: "train",
};

test("DeleteButton calls onHandleDelete", () => {
  const mockOnHandleDelete = jest.fn();

  useRouter.mockReturnValue({
    push: jest.fn(),
  });

  render(<EntryList entries={[entry]} onHandleDelete={mockOnHandleDelete} />);
  const deleteButton = screen.getByRole("button", {name:"🗑️"});

  fireEvent.click(deleteButton);

  expect(mockOnHandleDelete).toHaveBeenCalledWith(entry.id);
});
