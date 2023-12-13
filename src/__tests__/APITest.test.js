import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestAPI from "../components/TestAPI";
import * as services from "../utils/services";

it("API data is rendered", async () => {
  const mockFecthData = jest
    .spyOn(services, "FetchData")
    .mockImplementation(async () => {
      return [
        {
          name: "kunal",
        },
      ];
    });
  render(<TestAPI />);
  expect(mockFecthData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/kunal/i)).toBeInTheDocument();
  });
});
