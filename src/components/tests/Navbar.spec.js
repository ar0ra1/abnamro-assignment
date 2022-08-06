import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/vue";
import NavbarComponent from "../NavbarComponent.vue";

test("NavbarComponent renders correctly", () => {
  render(NavbarComponent);
  const headingElement = screen.getByTestId("nav-heading");
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent("ABN AMRO Assignment");
});
