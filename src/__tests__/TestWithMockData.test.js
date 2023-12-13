import { render, screen } from "@testing-library/react";
import TestWithMockData from "../components/TestWithMockData";
import userEvent from "@testing-library/user-event";
import { mockData } from "../utils/constants";

test("List renders successfully", () => {
  render(<TestWithMockData data={mockData} displayUnorderedList={true} />);
  expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
});

test("Ordered list renders", () => {
  render(<TestWithMockData data={mockData} displayUnorderedList={false} />);
  expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
});

test("Email link click handler called", async () => {
  const mockHandleClick = jest.fn();
  render(
    <TestWithMockData
      data={mockData}
      displayUnorderedList={true}
      handleClick={mockHandleClick}
    />
  );
  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(mockHandleClick).toHaveBeenCalled();
});
