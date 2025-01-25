import RestaurantMenu from "../RestaurantMenu";
import { render, act } from "@testing-library/react";
it("should Load Restaurant Menu Component", async () => {
  await act(async () => render(<RestaurantMenu />));
});
