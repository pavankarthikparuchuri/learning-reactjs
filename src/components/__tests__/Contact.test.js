import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  test("Should Load Contact Us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should Load Button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should Load input name inside Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should Load two input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
  });
});
