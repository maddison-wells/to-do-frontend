// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { getAllToDoItems } from "../../services/to-do-list-services";
// import { ItemList } from "./ItemList";
// import "@testing-library/jest-dom/extend-expect";
// import "@testing-library/jest-dom/jest-globals";
// import "@testing-library/jest-dom";

// // Mocking the getAllToDoItems function
// jest.mock("../../services/to-do-list-services", () => ({
//   getAllToDoItems: jest.fn(),
// }));

// describe("ItemList", () => {
//   test("renders ItemList component", async () => {
//     const todoItems = [
//       {
//         id: 1,
//         title: "Test Todo Item",
//         createdAt: "2024-03-06T12:00:00Z",
//         updatedAt: "2024-03-06T12:00:00Z",
//         status: { id: 1, name: "In Progress" },
//         description: "Test Description",
//       },
//     ];

//     jest.mock("../../services/to-do-list-services", () => ({
//       getAllToDoItems: jest.fn(),
//     }));
//     render(<ItemList />);

//     // Wait for the items to be loaded
//     await waitFor(() => {
//       const titleElement = screen.getByText("Test Todo Item");
//       expect(titleElement).toBeInTheDocument();
//     });
//   });

//   test('opens modal when "Add" button is clicked', async () => {
//     render(<ItemList />);

//     const addButton = screen.getByText(/add/i);
//     userEvent.click(addButton);

//     const modalElement = screen.getByTestId("modal");
//     expect(modalElement).toBeInTheDocument();
//   });

//   test("filters items based on status", async () => {
//     const todoItems = [
//       {
//         id: 1,
//         title: "Test Todo Item",
//         createdAt: "2024-03-06T12:00:00Z",
//         updatedAt: "2024-03-06T12:00:00Z",
//         status: { id: 1, name: "In Progress" },
//         description: "Test Description",
//       },
//     ];

//     (getAllToDoItems as jest.Mock).mockResolvedValue(todoItems);

//     render(<ItemList />);

//     // Wait for the items to be loaded
//     await waitFor(() => {
//       const titleElement = screen.getByText("Test Todo Item");
//       expect(titleElement).toBeInTheDocument();
//     });

//     // Click on the dropdown and select "Completed"
//     const dropdown = screen.getByPlaceholderText("Search by Status");
//     userEvent.selectOptions(dropdown, "4");

//     // Check if only completed items are shown
//     const completedItem = screen.getByText("Test Todo Item");
//     expect(completedItem).toBeInTheDocument();
//   });
// });
