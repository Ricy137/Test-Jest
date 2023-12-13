import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestStateChange, {
  StateClickChange,
} from "../components/TestStateChange";

it("State changed", () => {
  render(<TestStateChange />);
  expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
});

it("Toggle text visible", async () => {
  render(<StateClickChange />);
  await userEvent.click(screen.getByText(/toggle text/i));
  expect(screen.getByText(/text visible/i)).toBeInTheDocument();
});
