import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/vue";
import SearchComponent from "../SearchComponent.vue";

test("Search component renders correctly", async () => {
  const { container, emitted } = render(SearchComponent);
  const el = container.querySelector("input");
  expect(el).toBeInTheDocument();
});

test("Search Emit works", async () => {
  const { container, emitted } = render(SearchComponent);
  const el = container.querySelector("input");
  await fireEvent.update(el, { target: { value: "test" } });
  expect(emitted()).toHaveProperty("handle-text-change");
});
