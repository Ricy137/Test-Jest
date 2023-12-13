import { render, screen } from "@testing-library/react";
import FirstTest from "../components/FirstTest";

test("FirstTest components renders successfully", () => {
  render(<FirstTest />);
  const firstTest = screen.getByText(/first test/i);// query for an element
  expect(firstTest).toBeInTheDocument();
});
