import RestroCard, { promotedCard } from "../RestroCard";
import resData from "../../utils/mockData";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
test("should render restrocard with props data", () => {
  render(<RestroCard RestroData={resData[0]} />);

  const name = screen.getByRole("heading", { name: resData[0].info.name });
  expect(name).toBeInTheDocument();
});

test("should render promoted restrocard with props data", () => {
  const Card = promotedCard(RestroCard);
  render(<Card RestroData={resData[0]} />);

  const name = screen.getByRole("heading", { name: resData[0].info.name });
  expect(name).toBeInTheDocument();
});
