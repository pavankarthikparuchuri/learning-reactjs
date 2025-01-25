import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("Should render Header Component with a Login Button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  //   const LoginBtn = screen.getByRole("button", { name: "Login" });
  const LoginBtn = screen.getByText("Login");
  //   const cartItems = screen.getByText(/Cart/);

  fireEvent.click(LoginBtn); //to click a button we use fireevent
  const LogoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(LogoutBtn).toBeInTheDocument();
});
