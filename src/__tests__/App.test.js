import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Swiss Cheese", category: "Dairy" },
  { id: 6, name: "Cookies", category: "Dessert" },
];

test("renders the shopping list and handles search term changes", () => {
  render(<App />);

  // Check that the list initially renders all items
  expect(screen.queryAllByText(/Yogurt|Pomegranate|Lettuce|String Cheese|Swiss Cheese|Cookies/).length).toBe(6);

  // Simulate typing in the search field
  fireEvent.change(screen.queryByPlaceholderText(/Search/), {
    target: { value: "Cheese" },
  });

  // Verify that only items with "Cheese" are displayed
  expect(screen.queryByText("Swiss Cheese")).toBeInTheDocument();
  expect(screen.queryByText("String Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Yogurt")).not.toBeInTheDocument();
  expect(screen.queryByText("Pomegranate")).not.toBeInTheDocument();
});
