import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "../components/List";

it("Element added to list", async () => {
  render(<List />);
  expect(screen.getAllByTestId("record").length).toBe(3);
  await userEvent.click(screen.getByText(/add to list/i));
  expect(screen.getAllByTestId("record").length).toBe(4);
});

it("Element removed from list", async () => {
  render(<List />);
  expect(screen.getAllByTestId("record").length).toBe(3);
  await userEvent.click(screen.getByText(/remove from list/i));
  expect(screen.getAllByTestId("record").length).toBe(2);
});
