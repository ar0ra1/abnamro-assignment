import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/vue";
import SideBarComponent from "../SideBarComponent.vue";

const language = "English";
const rating = { average: "8.5" };
const type = "TV Series";
const status = "Running";
const network = { name: "The CW" };
const runtime = 60;
const genres = ["Drama", "Comedy"];

test("SidebarComponent renders correctly", () => {
  render(SideBarComponent, {
    props: { language, rating, type, status, network, runtime, genres },
  });
  const languageElement = screen.getByTestId("language");
  expect(languageElement).toBeInTheDocument();
  expect(languageElement).toHaveTextContent(language);
  const ratingElement = screen.getByTestId("rating");
  expect(ratingElement).toBeInTheDocument();
  expect(ratingElement).toHaveTextContent(rating.average);
  const typeElement = screen.getByTestId("type");
  expect(typeElement).toBeInTheDocument();
  expect(typeElement).toHaveTextContent(type);
  const statusElement = screen.getByTestId("status");
  expect(statusElement).toBeInTheDocument();
  expect(statusElement).toHaveTextContent(status);
  const networkElement = screen.getByTestId("network");
  expect(networkElement).toBeInTheDocument();
  expect(networkElement).toHaveTextContent(network.name);
  const runtimeElement = screen.getByTestId("runtime");
  expect(runtimeElement).toBeInTheDocument();
  expect(runtimeElement).toHaveTextContent(runtime);
  const genresElement = screen.getAllByTestId("genres");
  expect(genresElement).toHaveLength(genres.length);
});
