import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/vue";
import AllShows from "../AllShows.vue";

test("AllShows renders correctly with data", async () => {
  render(AllShows);
  waitFor(() => {
    const component = screen.getByTestId("shows-component");
    expect(component).toBeInTheDocument();
  });
});

test("AllShows renders correctly when loading", () => {
  render(AllShows);
  const component = screen.getByTestId("api-loading");
  expect(component).toBeInTheDocument();
});
