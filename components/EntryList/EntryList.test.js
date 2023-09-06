import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should call handleDelete functions", async () => {
    const handleDelete = jest.fn();
  
    const user = userEvent.setup();
  
    render(<EntryList onDelete={handleDelete} />);
  
    const deleteButton = screen.getByRole("button", {
      name: /🗑️/i,
    });
  
    await user.click(deleteButton);
  
    expect(handleDelete).toHaveBeenCalledWith("1");
  });