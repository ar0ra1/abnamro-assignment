import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/vue";
import GenreComponent from "../GenreComponent.vue";

test("Genre component renders correctly", async () => {
  render(GenreComponent, {
    props: { allGeneres: ["Action", "Comedy"], selectedGenre: "" },
  });
  const getActionElement = screen.getByText(/Action/);
  expect(getActionElement).toBeInTheDocument();
  await fireEvent.click(getActionElement, { target: { value: "Action" } });
});

test("Genre button has correct class", () => {
  render(GenreComponent, {
    props: { allGeneres: ["Action", "Comedy"], selectedGenre: "Action" },
  });
  const getActionElement = screen.getByText(/Action/);
  expect(getActionElement).toHaveClass("border-b-abn-green");
});
