import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import { UserContext } from "../utils/UserContext";
// import useOnlineStatus from "../utils/useOnlineStatus";
import Body from "../Body";

//what to do when there is a fetch function inside the component, jest doesnot understand this because the fetch is provided by the browser and not javascript. so, we need to create a mock function.
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(resData);
//     },
//   });
// });
//whenever we are doing some api calls and updating the state wrap the component with the act function
// test("should render body component", async () => {
//     await act(async () => render(<Body />))
//   });

// Mock UserContext
describe("Body Component", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  afterAll(() => {
    console.log("after all");
  });
  afterEach(() => {
    console.log("after each");
  });
  test("should render body component", async () => {
    // Mocking the initial state for restaurants
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    // Simulate the asynchronous effect of setting the restaurants state
    //waitFor is used to wait for the component to complete the asyncronous operations like useEffect or setTimeout before assertions.
    //act ensures that all the updates to the component be it state, props and effects are processed and reflected in DOM before making assertions
    //act doesn't retry assertions but waitFor retries the assertion until it passes or times out.
    // await waitFor(() => {
    const searchBtn = screen.getByRole("button", { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
    // });

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "restaurant" } });
    fireEvent.click(searchBtn);

    const restroCards = screen.getAllByTestId("restroCard");
    expect(restroCards.length).toBe(2);
  });
});

test("top rated check", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRated = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRated);
  const data = screen.getAllByTestId("restroCard");

  expect(data.length).toBe(11);
});
