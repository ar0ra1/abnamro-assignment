import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/vue";
import TransitionStateComponent from "../TransitionStateComponent.vue";

test("TransitionStateComponent renders correctly when api is loading", () => {
  render(TransitionStateComponent, { props: { type: "api-loading" } });
  const loadingElement = screen.getByTestId("api-loading");
  expect(loadingElement).toBeInTheDocument();
  expect(loadingElement).toHaveTextContent("Loading...");
});

test("TransitionStateComponent renders correctly when api has error", () => {
  render(TransitionStateComponent, { props: { type: "api-error" } });
  const errorElement = screen.getByTestId("api-error");
  expect(errorElement).toBeInTheDocument();
  expect(errorElement).toHaveTextContent("Something went wrong...");
});

test("TransitionStateComponent renders correctly when there is no data", () => {
  render(TransitionStateComponent, { props: { type: "no-data" } });
  const noResultsElement = screen.getByTestId("no-data");
  expect(noResultsElement).toBeInTheDocument();
  expect(noResultsElement).toHaveTextContent("No data found...");
});
