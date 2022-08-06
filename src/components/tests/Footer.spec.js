import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/vue";
import FooterComponent from "../FooterComponent.vue";

test("FooterComponent renders correctly", () => {
  render(FooterComponent);
  const githubElement = screen.getByTestId("footer-github");
  expect(githubElement).toBeInTheDocument();
  expect(githubElement).toHaveTextContent("GitHub");

  const authorElement = screen.getByTestId("footer-author");
  expect(authorElement).toBeInTheDocument();
  expect(authorElement).toHaveTextContent("by Akash Arora");
});
